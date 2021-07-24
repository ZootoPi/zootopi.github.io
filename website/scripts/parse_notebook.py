#!/usr/bin/env python3

import os
import re
import nbformat
from nbconvert import MarkdownExporter, writers
from pathlib import Path


def update_metadata(cell, key, value=True):
    "Sets `key` to `value` on the `metadata` of `cell` without replacing metadata"
    cell.setdefault('metadata', {})[key] = value


def hide_input(cell):
    pat = re.compile(
        r"^\s*\#\s*(hide_input|hide-input|hide\sinput)[ \t]*$", re.MULTILINE | re.VERBOSE)
    if pat.search(cell['source']):
        update_metadata(cell, 'hide_input')


preprocess = [hide_input]


def convert_notebook(ipynb_in_path, exporter, writer) -> None:

    print(f"Generating {ipynb_in_path}")

    markdown_out_dir = os.path.dirname(ipynb_in_path)
    ipynb_file_name = Path(ipynb_in_path).stem

    # convert notebook to HTML
    with open(ipynb_in_path, "r") as in_file:
        nb_str = in_file.read()
        nb = nbformat.reads(nb_str, nbformat.NO_CONVERT)

    # displayname is absent from notebook metadata
    nb["metadata"]["kernelspec"]["display_name"] = "python3"

    for cell in nb['cells']:
        for f in preprocess:
            f(cell)

    resources = {}
    resources['unique_key'] = ipynb_file_name
    resources['output_files_dir'] = ipynb_file_name + "_files"

    markdown, meta = exporter.from_notebook_node(nb, resources)
    if 'metadata' not in meta:
        meta['metadata'] = {}
    meta['metadata']['path'] = markdown_out_dir

    writer.write(markdown, meta, ipynb_file_name)


def convert_notebooks(dirs):
    notebooks = []

    for dir in dirs:
        for root, _, files in os.walk(dir):
            for file in files:
                if file.endswith('.ipynb'):
                    notebooks.append(os.path.join(root, file))

    exporter = MarkdownExporter()
    exporter.extra_template_basedirs.append(os.path.dirname(__file__))
    exporter.template_name = 'ext_md'

    writer = writers.FilesWriter()

    for file in notebooks:
        convert_notebook(file, exporter=exporter, writer=writer)


if __name__ == "__main__":

    convert_notebooks(dirs=['../docs', '../blog'])
