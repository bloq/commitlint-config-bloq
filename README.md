# commitlint-config-bloq

Shareable [commitlint](https://commitlint.js.org/) config as we do at [Bloq](https://bloq.com).

## Usage

Install the config locally:

```sh
npm install --save-dev commitlint-config-bloq
```

Then, extend your own configuration:

```json
{
  "extends": ["bloq"]
}
```

## Inspiration

The rules this package sets are based on [The seven rules of a great Git commit message](https://cbea.ms/git-commit/), a 2014 post by [Chris Beams](https://twitter.com/cbeams) worth reading even today.
