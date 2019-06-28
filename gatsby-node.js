const PLUGIN_RULES = ['fonts', 'images', 'media']

exports.onCreateWebpackConfig = (
  { actions, getConfig, loaders, rules },
  { rules: pluginRules = PLUGIN_RULES }
) => {
  const config = getConfig()

  const rulesTests = pluginRules.map(rule => {
    if (!PLUGIN_RULES.includes(rule)) {
      throw new Error(`Invalid rule: '${String(rule)}'`)
    }
    return String(rules[rule]().test)
  })

  for (let rule of config.module.rules) {
    if (rulesTests.includes(String(rule.test))) {
      const { use } = rule
      for (let i = use.length - 1; i >= 0; i--) {
        if (use[i].loader.includes('url-loader')) {
          use[i] = loaders.file()
        }
      }
    }
  }

  actions.replaceWebpackConfig(config)
}
