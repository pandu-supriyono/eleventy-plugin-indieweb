## eleventy-plugin-indieweb

An [eleventy](https://www.11ty.dev/) plugin containing shortcodes and other helpers to
generate markup necessary to connect your website to the [IndieWeb](https://indieweb.org).

## Requirements

- Eleventy v1.0.0 or higher

## Current features

- h-card shortcode to generate markup containing h-cards in your template
- globally accessible [11ty data](https://www.11ty.dev/docs/data/) to retrieve specific h-card properties

### Upcoming features

- shortcodes to wrap h-entry properties throughout the markup in your posts page

## Usage

```bash
npm install eleventy-plugin-indieweb
```

Then, include it in your `.eleventy.js` config file:

```js
const eleventyPluginIndieWeb = require("eleventy-plugin-indieweb");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(eleventyPluginIndieWeb);
};
```

## Config Options

| Option       | Type       | Default       | Usage                |
| ------------ | ---------- | ------------- | -------------------- |
| key          | string     | "indieWeb"    | 11ty data key to access plugin-related data |
| hCard        | object     | {}            | h-card properties to populate your h-card with |

### hCard object

You can populate hCard data in the options object. The property keys are equal to those displayed in the [h-card specification](https://microformats.org/wiki/h-card#properties), but without the prefix and in pascal case.

For example: `name` maps to `p-name` and `extendedAddress` maps to `p-extended-address`.

There are some properties that are not yet implemented. Those are:

- `p-geo`
- `u-impp`
- `u-sound`

## Provides shortcodes

### hCard(overrides: object, options: object)

Returns the h-card markup based on the values supplied into your plugin config.
You can optionally pass an overrides object to override any of these values.

In the hCard options, you can pass:

| Option       | Type       | Default       | Usage                |
| ------------ | ---------- | ------------- | -------------------- |
| class        | string     |               | additional classes to render the parent element with |

## Thanks

Thanks to [5t3ph](https://github.com/5t3ph) for the plugin template.
