import { getAssets, getMiniGames, getMiniGame } from "./source.js";

const miniGames = await getMiniGames();
const app = document.querySelector("#app");

miniGames.map((miniGame) => {
  const e = document.createElement("div");
  e.className = "card";
  e.innerHTML = `<image class="logo" src="${miniGame.icon}" /><div>
    <p>${miniGame.name}</p>
    <div class="description">
      ${miniGame.genre.map((genre) => genre)}
    </div>
</div>`;
  app.querySelector("#minigames").appendChild(e);
});
