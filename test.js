const content = document.getElementById("content");

// getShop();
// getNewsBr();
// getCosmeticById();
// getAllCosmetics();
// searchCosmetic();
// searchAllCosmetic();
// searchCosmeticIds();

function searchCosmeticIds() {
  fortniteApi.cosmetics
    .searchIds(
      [
        "bannertoken_001_cattus",
        "bannertoken_008_s11_diamondshapes",
        "bannertoken_stw006_starlight6"
      ],
      "de"
    )
    .then(response => response.json())
    .then(obj => {
      obj = fortniteApi.getDataFromObject(obj);
      content.innerHTML = JSON.stringify(obj, null, 2);

      hljs.highlightBlock(content);
    });
}

function searchAllCosmetic() {
  fortniteApi.cosmetics
    .searchAll(
      {
        rarity: "uncommon"
      },
      "de"
    )
    .then(response => response.json())
    .then(obj => {
      content.innerHTML = JSON.stringify(obj, null, 2);

      hljs.highlightBlock(content);
    });
}

function searchCosmetic() {
  fortniteApi.cosmetics
    .search(
      {
        rarity: "uncommon"
      },
      "de"
    )
    .then(response => response.json())
    .then(obj => {
      content.innerHTML = JSON.stringify(obj, null, 2);

      hljs.highlightBlock(content);
    });
}

function getAllCosmetics() {
  fortniteApi.cosmetics
    .getAll("de")
    .then(response => response.json())
    .then(obj => {
      content.innerHTML = JSON.stringify(obj, null, 2);

      hljs.highlightBlock(content);
    });
}

function getCosmeticById() {
  fortniteApi.cosmetics
    .get("bannertoken_001_cattus", "de")
    .then(response => response.json())
    .then(obj => {
      content.innerHTML = JSON.stringify(obj, null, 2);

      hljs.highlightBlock(content);
    });
}

function getNewsBr() {
  fortniteApi.news
    .getBr("de")
    .then(response => response.json())
    .then(obj => {
      content.innerHTML = JSON.stringify(obj, null, 2);

      hljs.highlightBlock(content);
    });
}

function getNews() {
  fortniteApi.news
    .get("de")
    .then(response => response.json())
    .then(obj => {
      content.innerHTML = JSON.stringify(obj, null, 2);

      hljs.highlightBlock(content);
    });
}

function getShop() {
  fortniteApi.shop
    .get("de")
    .then(response => response.json())
    .then(obj => {
      content.innerHTML = JSON.stringify(obj, null, 2);

      hljs.highlightBlock(content);
    });
}
