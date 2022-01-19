import argparse
import json
import os
from jinja2.nodes import Output

import nbformat
from bs4 import BeautifulSoup
from nbconvert import HTMLExporter, PythonExporter

repo_dir = "./"
tid = "10.test"
# convert notebook to HTML
ipynb_in_path = os.path.join(
    repo_dir, "docs", "tutorial", "python", f"{tid}.ipynb")
with open(ipynb_in_path, "r") as infile:
    nb_str = infile.read()
    nb = nbformat.reads(nb_str, nbformat.NO_CONVERT)

print(ipynb_in_path)

print(nb)
