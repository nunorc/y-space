
import os, jinja2, pypandoc

env = jinja2.Environment(loader = jinja2.FileSystemLoader(searchpath="./templates"))

base = '.'

DEST = 'build'
CONTENT = 'content'
PAGES = 'pages'

if not os.path.exists(DEST):
    os.mkdir(DEST)
if not os.path.exists(os.path.join(DEST, PAGES)):
    os.mkdir(os.path.join(DEST, PAGES))

def _build_index():
    print('Building index')

    tmpl = env.get_template('home.html')
    home = tmpl.render(base = '.')
    tmpl = env.get_template('main.html')
    home = tmpl.render(base = '.', main = home)

    with open(os.path.join(DEST, 'index.html'), 'w') as fout:
        fout.write(home)

def _build_about():
    print('Building about')

    tmpl = env.get_template('about.html')
    about = tmpl.render(base = '.')
    tmpl = env.get_template('wrapper.html')
    page = tmpl.render(base = '.', page = about)
    tmpl = env.get_template('main.html')
    main = tmpl.render(base = '.', main = page)

    with open(os.path.join(DEST, 'about.html'), 'w') as fout:
        fout.write(main)

def _build_page(name):
    print('Building page', name)

    filename = os.path.join(CONTENT, PAGES, name+'.md')
    page = pypandoc.convert_file(filename, 'html')

    tmpl = env.get_template('wrapper.html')
    page = tmpl.render(base = '..', page = page)
    tmpl = env.get_template('main.html')
    main = tmpl.render(base = '..', main = page, page = True)

    with open(os.path.join(DEST, PAGES, name+'.html'), 'w') as fout:
        fout.write(main)

# index
_build_index()

# About
_build_about()

# pages
for f in os.listdir(os.path.join(CONTENT, PAGES)):
    if f.endswith('.md'):
        p = f.replace('.md', '')
        _build_page(p)
