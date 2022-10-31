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
  e.onclick = () => changeCard(miniGame.no);
  e.innerHTML = `<img class="logo" src="${miniGame.icon}" /><div>
    <p>${miniGame.name}</p>
    <div class="tags">
      ${tag}
    </div>
</div>`;

  app.querySelector("#minigames").appendChild(e);
});

const changeCard = async (no) => {
  const minigame = await getMiniGame(no);
  let tag = "";
  minigame.genre.map((genre) => {
    tag += `<div class="genre">${genre}</div>`;
  });
  app.querySelector("#gamecard").innerHTML = `
  <div class="card_img">
            <img
              src="${minigame.images[0]}"
            />
          </div>
          <div class="card_desc">
            <h2>${minigame.name}</h2>
            <p>
             ${minigame.description}
            </p>
            <div class="tags">
              ${tag}
            </div>
            <button>Play</button>
          </div>
        `;
};
