# gatsby-plugin-force-file-loader

Force Webpack to use `file-loader` instead of `url-loader` in fonts, images and media rules. The motivation behind this plugin is because when using `typeface-*` modules to embed fonts in an app, some font styles are embedded in CSS as base64 strings even if they are not being used.

## Install

```bash
$ npm install gatsby-plugin-force-file-loader
```

## Configure

By default, all rules are enabled. To conform with the best practices, it's recommended that you set only the rules that you need, keeping the default behavior in other rules.

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

## License

[The MIT License](./LICENSE)
