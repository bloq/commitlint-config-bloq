const lintFile = "eslint --cache --fix --quiet";
const formatFile = "prettier --ignore-unknown --write";
const sortPackageJson = "better-sort-package-json";

const config = {
  "*,!*.{js,md},!package.json": [formatFile],
  "*.{js,md}": [lintFile, formatFile],
  "package.json": [sortPackageJson, formatFile],
};

export default config;
