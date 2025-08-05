const fs = require('fs');
const path = require('path');

const locales = ['en', 'tw', 'jp'];
const buildDir = path.join(__dirname, '../build');
const indexFile = path.join(buildDir, 'index.html');

locales.forEach(locale => {
  const localeDir = path.join(buildDir, locale);
  if (!fs.existsSync(localeDir)) {
    fs.mkdirSync(localeDir);
  }
  fs.copyFileSync(indexFile, path.join(localeDir, 'index.html'));
});