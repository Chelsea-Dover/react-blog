# React Blog Template

Quickly create a simple react blog using this template.
## How to use
 * clone this repo
 * add markdown files for articles(in the articles directory)
 * edit config file(right now the only two blog theme options are Theme1 and Theme2) and add custom css(in the client directory)
 * swap out logo image for your own(in the assets directory)
 * in the terminal go to the scripts directory and run `node upload.js ../articles/ ../client/config.json`
 * run `yarn start` to see your blog locally
 * deploy blog using [surge](https://surge.sh/) or [GitHub Pages](https://pages.github.com/)

## Note
After every change in the config file or to any articles you must run the upload script.

### Future features
* Admin dashboard with all configs and articles editable there
* More themes to choose from
* "other" page template option
