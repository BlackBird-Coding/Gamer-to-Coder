import { getAssets, getMiniGames, getMiniGame } from "./source.js";
import { visualDom } from "./utils.js";

const miniGames = await getMiniGames();

const miniGamesElement = document.querySelector("#minigames");

miniGames.map((miniGame) => {
  const e = document.createElement("div");
  e.innerHTML = `<div>${miniGame.name}</div><image src="${miniGame.icon}" />`;
  miniGamesElement.appendChild(e);
});
