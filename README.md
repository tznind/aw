# AW

**This is still a Work in Progress**

This is an [Apocalypse World Burned Over](https://www.kickstarter.com/projects/lumpleygames/apocalypse-world-burned-over) implementation of [PbtA-style](https://en.wikipedia.org/wiki/Powered_by_the_Apocalypse?utm_source=chatgpt.com) character sheets.

It is online at https://tznind.github.io/aw/cs.html

See https://github.com/tznind/lc for main template repository.

## Sync changes

If after using the template, if find new features have been added that you want to sync into your repository run the following to sync changes:

```
git remote add upstream https://github.com/tznind/lc
git fetch upstream

git checkout main
git merge upstream/main --allow-unrelated-histories
```

(for merge conflicts e.g. in data folder - always keep your own changes and discard incoming)

## Running Locally

To run the page locally (i.e. not in GitHub Pages) you can use any of:

```powershell
# Python
python -m http.server 8000

# Node.js
npx serve .

# PHP  
php -S localhost:8000
```

Then visit `http://localhost:8000/cs.html`

## License

Character sheet code is licensed under the [MIT license](./LICENSE).

Apocalypse World content by **Meguey and D. Vincent Baker** - used with kind permission.
