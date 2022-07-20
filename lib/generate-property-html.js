function generatePropertyHTML(propertyKey, propertyValue, mappings) {
  const mapping = mappings[propertyKey];

  if (!mapping) {
    console.warn(`No mapping found for property: ${propertyKey}`);
    return null;
  }

  const mappingIsObject = typeof mapping === "object";

  const htmlTag = mappingIsObject ? mapping.element : "span";
  const htmlClass = mappingIsObject ? mapping.property : mapping;
  const value =
    mappingIsObject && mapping.transform
      ? mapping.transform(propertyValue)
      : propertyValue;
  const transformedValue =
    typeof mapping === "function" ? mapping(value) : value;
  const attrsKeys =
    mappingIsObject && mapping.attrs ? Object.keys(mapping.attrs) : [];

  const attrs = attrsKeys
    .reduce((acc, currentKey) => {
      const attrValue = mapping.attrs[currentKey];
      const transformedValue =
        typeof attrValue === "function" ? attrValue(value) : attrValue;
      const markup = `${currentKey}="${transformedValue}"`;

      return [...acc, markup];
    }, [])
    .join(" ");

  return `<${htmlTag}${
    attrs.length > 0 ? " " + attrs : ""
  } class="${htmlClass}">${transformedValue}</${htmlTag}>`;
}

module.exports = generatePropertyHTML;
