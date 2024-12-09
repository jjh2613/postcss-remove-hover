/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = {}) => {
  return {
    postcssPlugin: "postcss-remove-hover",
    Once(root) {
      root.walkRules((rule) => {
        if (rule.selector.includes(":hover")) {
          rule.remove();
        }
      });
    },
  };
};

module.exports.postcss = true;
