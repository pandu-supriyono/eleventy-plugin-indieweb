const hCardPropertyMappings = require("./property-mappings");
const generatePropertyHTML = require("./generate-property-html");

function generateHcard(properties, options = {}) {
  const additionalClasses = options.class;
  const classes = additionalClasses ? 'h-card '.concat(additionalClasses) : 'h-card';
  const content = Object.keys(properties).reduce((acc, currentKey) => {
    const value = properties[currentKey];
    const html = generatePropertyHTML(currentKey, value, hCardPropertyMappings);

    return html !== null ? [...acc, html] : acc;

  }, []).join("\r\n");

  return `<div class="${classes}">${content}</div>`;
}

module.exports = generateHcard