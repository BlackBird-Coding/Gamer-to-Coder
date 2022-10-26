const assetsUrl = "https://gamertocoder.garena.co.th/api/assets";
const miniGamesUrl = "https://gamertocoder.garena.co.th/api/minigames";
const miniGame = "https://gamertocoder.garena.co.th/api/minigame";

const getAssets = async () => {
  const res = await fetch(assetsUrl);
  return res.json();
};

const getMiniGames = async () => {
  const res = await fetch(miniGamesUrl);
  return res.json();
};

const getMiniGame = async (id) => {
  const res = await fetch(miniGame + "/" + id);
  return res.json();
};

export { getAssets, getMiniGames, getMiniGame };
