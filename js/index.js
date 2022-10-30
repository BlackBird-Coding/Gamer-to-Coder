import { getAssets, getMiniGames, getMiniGame } from "./source.js";

const miniGames = await getMiniGames();
const app = document.querySelector("#app");

miniGames.map((miniGame) => {
  let tag = "";

  miniGame.genre.map((genre) => {
    tag += `<div class="genre">${genre}</div>`;
  });
  const e = document.createElement("div");
  e.className = "card";
  e.innerHTML = `<img class="logo" src="${miniGame.icon}" /><div>
    <p>${miniGame.name}</p>
    <div class="tags">
      ${tag}
    </div>
</div>`;

  app.querySelector("#minigames").appendChild(e);
});
