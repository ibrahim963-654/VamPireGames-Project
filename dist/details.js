let savedGame = window.localStorage.getItem("current_game");
if (savedGame) {
    let detdiv = document.getElementById("details-container");
    let game = JSON.parse(savedGame);
    let div = document.createElement("div");
    div.className = "main-div";
    let image = document.createElement("img");
    image.className = "game-img";
    image.src = game.thumbnail;
    let info = document.createElement("div");
    info.className = "game-info";
    let title = document.createElement("h3");
    title.className = "game-name";
    title.textContent = `Name: ${game.title}`;
    let dev = document.createElement("h3");
    dev.className = "game-dev";
    dev.textContent = `Developer company: ${game.developer}`;
    let desc = document.createElement("p");
    desc.className = "game-desc";
    desc.textContent = `About Game: ${game.short_description}`;
    let btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = "Back To Main Page";
    btn.onclick = function () {
        window.location.href = "index.html";
    };
    detdiv?.appendChild(div);
    div.appendChild(image);
    div.appendChild(info);
    info.appendChild(title);
    info.appendChild(dev);
    info.appendChild(desc);
    info.appendChild(btn);
    document.title = `Game: ${game.title} Details`;
}
else {
    console.log("No game data found in localStorage!");
}
export {};
