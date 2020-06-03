# gatsby-plugin-force-file-loader

Force Webpack to use `file-loader` instead of `url-loader` in fonts, images and
media rules. The motivation behind this plugin is because when using
`typeface-*` modules to embed fonts, some font styles are embedded in CSS as
base64 strings even if they are not being used.

## Install

```bash
$ npm install gatsby-plugin-force-file-loader
```

## Configure

Although all rules are enabled by default, it's recommended that you set only
the rules that you need, keeping the default Gatsby behavior whenever possible.

__Note:__ for better compatibility, use this plugin before any other plugin.

```javascript
// gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-force-file-loader`,
      options: {
        rules: [
          'fonts', /* Matches Gatsby default rules for fonts */
          'images', /* Matches Gatsby default rules for images */
          'media', /* Matches Gatsby default rules for media (video/audio) */
        ],
      },
    },
    /* ... */
  ],
}
```

## Options

### rules

Default: `['fonts', 'images', 'media']`. Type: `Array`.

The rules that should use `file-loader` instead of `url-loader`. By default, all
the three types are enabled, but it's recommended to set just the needed rules.

## License

[The MIT License](./LICENSE)
