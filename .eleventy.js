const generateHcard = require("./lib/generate-hcard");

module.exports = (eleventyConfig, options = {}) => {
  const defaults = {
    key: "indieWeb",
    hCard: {},
  };

  options = {
    ...defaults,
    ...options,
    hCard: {
      ...defaults.hCard,
      ...options.hCard,
    },
  };

  const { hCard } = options;

  eleventyConfig.addGlobalData(defaults.key, {
    hCard,
  });

  eleventyConfig.addShortcode("hCard", (overrides, options) => {
    const hCardProperties = {
      ...hCard,
      ...overrides,
    };

    return generateHcard(hCardProperties, options);
  });
};
