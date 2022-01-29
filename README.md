# gatsby-plugin-force-file-loader [![npm][1]][2]

Force Webpack to use `file-loader` instead of `url-loader` in fonts, images and
media rules.

## Installation

```bash
npm install gatsby-plugin-force-file-loader
```

## Usage

> Note: although all rules are enabled by default, it's recommended that you set
> only the rules that you need, keeping the default Gatsby behavior whenever
> possible.

```javascript
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-force-file-loader'
      // options: {
      //   rules: [
      //     'fonts', /* Matches Gatsby default rules for fonts */
      //     'images', /* Matches Gatsby default rules for images */
      //     'media' /* Matches Gatsby default rules for media (video/audio) */
      //   ]
      // }
    }
  ]
}
```

## Options

### rules

Type: `Array`. Default: `['fonts', 'images', 'media']`.

The rules that should use `file-loader` instead of `url-loader`. By default, all
the three types are enabled, but it's recommended to set just the needed rules.

## License

[The MIT License][license]

[1]: https://img.shields.io/npm/v/gatsby-plugin-force-file-loader
[2]: https://www.npmjs.com/package/gatsby-plugin-force-file-loader
[license]: ./LICENSE
