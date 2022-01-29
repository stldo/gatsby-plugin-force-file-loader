# gatsby-plugin-force-file-loader [![npm][1]][2]

Force Webpack to use `file-loader` instead of `url-loader` in fonts, images and
media rules.

## Installation

```sh
npm install gatsby-plugin-force-file-loader
```

## Usage

```js
/* gatsby-config.js */

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-force-file-loader'
      options: {
        /* gatsby-plugin-force-file-loader options here */
      }
    }
  ]
}
```

## Options

### rules

Type: `Array`. Default: `['fonts', 'images', 'media']`.

The rules that should use `file-loader` instead of `url-loader`. By default, all
the three types are enabled.

## License

[The MIT License][license]

[1]: https://img.shields.io/npm/v/gatsby-plugin-force-file-loader
[2]: https://www.npmjs.com/package/gatsby-plugin-force-file-loader
[license]: ./LICENSE
