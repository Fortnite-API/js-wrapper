/**
 * Represents an instance of FortniteApi with all it's endpoints.
 */
const fortniteApi = new FortniteApi();

function FortniteApi() {
  /**
   * Provides access to the /cosmetics/ endpoint
   * @property {CosmeticsEndpoint}
   */
  this.cosmetics = new CosmeticsEndpoint();

  /**
   * Provides access to the /shop/ endpoint.
   * @property {ShopEndpoint}
   */
  this.shop = new ShopEndpoint();

  /**
   * Provides access to the /news/ endpoint.
   * @property {NewsEndpoint}
   */
  this.news = new NewsEndpoint();

  /**
   * Executes a get request.
   * @param {string} uri
   * @param {Array} query
   * @returns {Promise<Response>}
   */
  this.getRequest = function (uri, query = null) {
    var params = "";

    if (query != null) {
      for (var prop in query) {
        if (Array.isArray(query[prop])) {
          for (var item of query[prop]) {
            params += prop + "=" + item + "&";
          }
        } else {
          params += prop + "=" + query[prop] + "&";
        }
      }

      if (params.length > 0) {
        params = "?" + params.substr(0, params.length - 1);
      }
    }

    var resource = fortniteApi.getBaseUri() + uri + params;

    return fetch(resource, {
      method: "GET",
      redirect: "follow",
      referrer: "no-referrer"
    });
  };

  /**
   * Returns the API's base URI.
   * @returns {string}
   */
  this.getBaseUri = function () {
    const uri = "https://fortnite-api.com";

    return uri;
  };

  /**
   * Returns an array of all supported languages (country codes).
   * @returns {Array}
   */
  this.getSupportedLanguages = function () {
    const languages = [
      "ar",
      "de",
      "en",
      "es",
      "es-419",
      "fr",
      "it",
      "ja",
      "ko",
      "pl",
      "pt-BR",
      "ru",
      "tr",
      "zh-CN",
      "zh-Hant"
    ];

    return languages;
  };

  /**
   * Returns the data member of an object if it exists
   * @param {Object} obj
   * @returns {Object}
   */
  this.getDataFromObject = function (obj) {
    if (Object.keys(obj).length !== 2) {
      return obj;
    }

    var hasStatus = Object.prototype.hasOwnProperty.call(obj, "status");
    var hasData = Object.prototype.hasOwnProperty.call(obj, "data");

    if (hasStatus && hasData) {
      return obj.data;
    } else {
      return obj;
    }
  };

  /**
   * Determines whether a response has a success status code.
   * @param {Response} response
   * @returns {bool}
   */
  this.isResponseSuccess = function (response) {
    return response.status >= 200 && response.status < 400;
  };
}

/**
 * Provides access to the /cosmetics/ endpoint
 */
function CosmeticsEndpoint() {
  /**
   *
   * @param {string} cosmeticId
   * @param {string} language
   * @returns {Promise<Response>}
   */
  this.get = async function (cosmeticId, language = null) {
    var path = "/cosmetics/br/" + cosmeticId;

    if (language !== null) {
      return fortniteApi.getRequest(path, {
        language: language
      });
    } else {
      return fortniteApi.getRequest(path);
    }
  };
  /**
   *
   * @param {string} language
   * @returns {Promise<Response>}
   */
  this.getAll = async function (language = null) {
    const path = "/cosmetics/br";

    if (language !== null) {
      return fortniteApi.getRequest(path, {
        language: language
      });
    } else {
      return fortniteApi.getRequest(path);
    }
  };
  /**
   *
   * @param {Object} query
   * @param {string} language
   * @returns {Promise<Response>}
   */
  this.search = async function (query, language = null) {
    const path = "/cosmetics/br/search";

    if (language !== null) {
      query.language = language;
    }

    return fortniteApi.getRequest(path, query);
  };
  /**
   *
   * @param {Object} query
   * @param {string} language
   * @returns {Promise<Response>}
   */
  this.searchAll = async function (query, language = null) {
    const path = "/cosmetics/br/search/all";

    if (language !== null) {
      query.language = language;
    }

    return fortniteApi.getRequest(path, query);
  };
  /**
   *
   * @param {Array} ids
   * @param {string} language
   * @returns {Promise<Response>}
   */
  this.searchIds = async function (ids, language = null) {
    const path = "/cosmetics/br/search/ids";

    var query = {
      id: ids
    };

    if (language !== null) {
      query.language = language;
    }

    return fortniteApi.getRequest(path, query);
  };
}

/**
 * Provides access to the /news/ endpoint.
 */
function NewsEndpoint() {
  /**
   *
   * @param {string} language
   * @returns {Promise<Response>}
   */
  this.get = async function (language = null) {
    const path = "/news";

    if (language !== null) {
      return fortniteApi.getRequest(path, {
        language: language
      });
    } else {
      return fortniteApi.getRequest(path);
    }
  };
  /**
   *
   * @param {string} language
   * @returns {Promise<Response>}
   */
  this.getBr = async function (language = null) {
    const path = "/news/br";

    if (language !== null) {
      return fortniteApi.getRequest(path, {
        language: language
      });
    } else {
      return fortniteApi.getRequest(path);
    }
  };
  /**
   *
   * @param {string} language
   * @returns {Promise<Response>}
   */
  this.getStw = async function (language = null) {
    const path = "/news/stw";

    if (language !== null) {
      return fortniteApi.getRequest(path, {
        language: language
      });
    } else {
      return fortniteApi.getRequest(path);
    }
  };
  /**
   *
   * @param {string} language
   * @returns {Promise<Response>}
   */
  this.getCreative = async function (language = null) {
    const path = "/news/creative";

    if (language !== null) {
      return fortniteApi.getRequest(path, {
        language: language
      });
    } else {
      return fortniteApi.getRequest(path);
    }
  };
}

/**
 * Provides access to the /shop/ endpoint.
 */
function ShopEndpoint() {
  /**
   *
   * @param {string} language
   * @returns {Promise<Response>}
   */
  this.get = async function (language = null) {
    const path = "/shop/br";

    if (language !== null) {
      return fortniteApi.getRequest(path, {
        language: language
      });
    } else {
      return fortniteApi.getRequest(path);
    }
  };
}
