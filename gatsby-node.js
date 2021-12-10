const PLUGIN_RULES = ['fonts', 'images', 'media']

exports.onCreateWebpackConfig = (
  { actions, getConfig, rules },
  { rules: pluginRules = PLUGIN_RULES }
) => {
  const config = getConfig()
  const rulesTests = pluginRules.map(rule => {
    if (!PLUGIN_RULES.includes(rule)) {
      throw new Error(`Invalid rule: "${String(rule)}"`)
    }
    return String(rules[rule]().test)
  })

  for (const { test, use } of config.module.rules) {
    if (rulesTests.includes(String(test))) {
      for (const rule of use) {
        if (rule.loader.includes('/url-loader/')) {
          rule.options.limit = false
        }
      }
    }
  }

  actions.replaceWebpackConfig(config)
}
