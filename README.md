# iPlayground Website

🍏 The official website of iPlayground.

## Quick start

For the 2026 website:

```bash
git clone https://github.com/iplayground/iplayground.github.io.git
cd iplayground.github.io/2026
npm install
npm run dev
```

For legacy year websites that have a `dev` folder:

```bash
git clone https://github.com/iplayground/iplayground.github.io.git
cd iplayground.github.io/{year}/dev
yarn install
yarn start
```

## Build and deploy

The 2026 website has no build step. It is deployed directly from `2026/` as raw
HTML/CSS/JS via GitHub Pages. To check it locally before deploy:

```bash
cd iplayground.github.io/2026
npm run dev
```

Then commit and push from the repository root:

```bash
cd ..
git add 2026
git commit -m "Update 2026 website"
git push
```

For legacy year websites that have a `dev` folder:

```bash
cd iplayground.github.io/{year}/dev
yarn build
cd ..
git add .
git commit -m "your commit"
git push
```
