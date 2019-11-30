<div align="center">

# JavaScript wrapper for [Fortnite-API.com](https://fortnite-api.com)

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/Fortnite-API/js-wrapper?logo=github)](https://github.com/Fortnite-API/js-wrapper/releases) [![GitHub issues](https://img.shields.io/github/issues/Fortnite-API/js-wrapper?logo=github)](https://github.com/Fortnite-API/js-wrapper/issues) [![MIT License](https://img.shields.io/github/license/Fortnite-API/js-wrapper)](https://github.com/Fortnite-API/js-wrapper/blob/master/LICENSE)

</div>

This repository offers an async request API around the endpoints of [fortnite-api.com](https://fortnite-api.com).

## Browser support

Because we used the more modern `fetch` API as our alternative of `XMLHttpRequest` you may experience problems on old browsers and especially on older mobile browsers.

Please use a polyfill for the fetch api (like [this](https://github.com/github/fetch)) if you want to support them.

## Deployment

You can use this by either downloading one of the [releases](https://github.com/Fortnite-API/js-wrapper/releases) or by using the file provided by [jsDelivr](https://www.jsdelivr.com).

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/Fortnite-API/js-wrapper@0.2.0/dist/fortnite-api.min.js"></script>
```

## Documentation

Here is a quick overview of the API so you can get started very quickly.
If you need a real example, please take a look at our [test file](https://github.com/Fortnite-API/js-wrapper/blob/master/test.js).

- Accessing the API

We offer a const `fortniteApi` object with 3 properties where you can access the endpoints.

```js
fortniteApi.cosmetics
fortniteApi.shop
fortniteApi.news
```

All methods are mapped to the exact same layout as on [fortnite-api.com/documentation](https://fortnite-api.com/documentation).

Each method can be used in async manner using either `async/await` or promises with `.then/.catch`.

- Query parameters

Some methods like `fortniteApi.cosmetics.search` require a query parameter.
In order to use them you need to provide them an object which later gets translated into to `URL` query parameters.

```js
var promise = fortniteApi.cosmetics
  .search(
  {
    rarity: "uncommon",
    hasIcon: true
  });
```

Others like `fortniteApi.cosmetics.searchIds` may be supplied with an array of `id's`.

```js
var promise = fortniteApi.cosmetics
  .searchIds(
  [
      "bannertoken_001_cattus",
      "bannertoken_008_s11_diamondshapes",
      "bannertoken_stw006_starlight6"
  ]);
```

### Contribute

if you can provide any help, may it only be spell checking please contribute!

We are open for any contribution.

## License

- Fortnite-API (MIT) [License](https://github.com/Fortnite-API/js-wrapper/blob/master/LICENSE "MIT License")

API developed by [Fortnite-API.com](https://fortnite-api.com/about)
