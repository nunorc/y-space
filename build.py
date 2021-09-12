
import os, jinja2, pypandoc

env = jinja2.Environment(loader = jinja2.FileSystemLoader(searchpath="./"))

DEST = 'docs'

if not os.path.exists(DEST):
    os.mkdir(DEST)

def _build_index(root = './'):
    print('Building index')

    tmpl = env.get_template('templates/home.html')
    home = tmpl.render(root = '.')
    tmpl = env.get_template('templates/main.html')
    home = tmpl.render(root = '.', main = home)

    with open(os.path.join(DEST, 'index.html'), 'w') as fout:
        fout.write(home)

def _build_about():
    print('Building about')

    tmpl = env.get_template('templates/about.html')
    about = tmpl.render(root = './')
    tmpl = env.get_template('templates/wrapper.html')
    page = tmpl.render(root = './', page = about)
    tmpl = env.get_template('templates/main.html')
    main = tmpl.render(root = './', main = page)

    with open(os.path.join(DEST, 'about.html'), 'w') as fout:
        fout.write(main)

def _build_reveal(page, root = './'):
    print('Building page:', page)

    tmpl = env.get_template(f"content/{ page }.html")
    main = tmpl.render(root = root)
    tmpl = env.get_template('templates/reveal.html')
    part = tmpl.render(title = 'Y-Space', root = root, main = main)
    with open(os.path.join(DEST, f"{ page }.html"), 'w') as fout:
        fout.write(part)

# index
_build_index()

# About
_build_about()

# pages
for p in ['fundamentals', 'mission-design', 'orbital-mechanics']:
    _build_reveal(p)
