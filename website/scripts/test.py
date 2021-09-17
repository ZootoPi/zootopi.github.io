
import argparse
import json
import os
from jinja2.nodes import Output

import nbformat
from bs4 import BeautifulSoup
from nbconvert import HTMLExporter, PythonExporter


TEMPLATE = """const CWD = process.cwd();
const React = require('react');
const Tutorial = require(`${{CWD}}/core/Tutorial.js`);
class TutorialPage extends React.Component {{
  render() {{
      const {{config: siteConfig}} = this.props;
      const {{baseUrl}} = siteConfig;
      return <Tutorial baseUrl={{baseUrl}} tutorialID="{}"/>;
  }}
}}
module.exports = TutorialPage;
"""

JS_SCRIPTS = """
<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.10/require.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
"""  # noqa: E501

print(f"Generating tutorial")

repo_dir = "./"
tid = "07.pandas"
# convert notebook to HTML
ipynb_in_path = os.path.join(
    repo_dir, "docs", "tutorial", "python", f"{tid}.ipynb")
with open(ipynb_in_path, "r") as infile:
    nb_str = infile.read()
    nb = nbformat.reads(nb_str, nbformat.NO_CONVERT)

print(ipynb_in_path)

# displayname is absent from notebook metadata
nb["metadata"]["kernelspec"]["display_name"] = "python3"

markdown_out = ''
for i, cell in enumerate(nb['cells']):
    if cell['cell_type'] == 'markdown':
        markdown_out += cell['source'] + '\n\n'
    elif cell['cell_type'] == 'code':
        markdown_out += '```python\n' + cell['source'] + '\n```\n\n'

        for output in cell['outputs']:
            if 'text/html' in output['data'].keys():
                markdown_out += output['data']['text/html'] + '\n\n'
            elif 'text/plain' in output['data'].keys():
                markdown_out += output['data']['text/plain'] + '\n\n'
            else:
                print(i, output['data'].keys())


with open(os.path.join(repo_dir, "docs", "tutorial", "python", f"{tid}.md"), "w") as md_outfile:
    md_outfile.write(markdown_out)

for output in nb['cells'][9]['outputs']:
    for key, value in output['data'].items():
        print(key, value)
# print(nb['cells'][11]['outputs'])

# exporter = HTMLExporter(template_name='classic')
# html, meta = exporter.from_notebook_node(nb)

# pull out html div for notebook
# soup = BeautifulSoup(html, "html.parser")
# nb_meat = soup.find("div", {"id": "notebook-container"})
# del nb_meat.attrs["id"]
# nb_meat.attrs["class"] = ["notebook"]
# html_out = JS_SCRIPTS + str(nb_meat)
# html_out = str(nb_meat)

# with open(os.path.join(repo_dir, "docs", "tutorial", "python", f"{tid}.md"), "w") as html_outfile:
#     html_outfile.write(html_out)

# # generate JS file
# script = TEMPLATE.format(tid)
# js_out_path = os.path.join(
#     repo_dir, "website", "src", "pages", "tutorials", f"{tid}.js"
# )
# with open(js_out_path, "w") as js_outfile:
#     js_outfile.write(script)
