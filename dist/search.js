document.addEventListener("DOMContentLoaded", () => {
    let searchQuery = window.localStorage.getItem("search_query");
    if (searchQuery) {
        let maindiv = document.getElementById("game-result");
        let h2 = document.getElementById("search-title-text");
        if (h2) {
            h2.innerHTML = `Result Of "${searchQuery}"`;
        }
        document.title = `Result Of "${searchQuery}"`;
        let request = new XMLHttpRequest();
        request.open("GET", "https://www.freetogame.com/api/games");
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                let games = JSON.parse(this.responseText);
                let foundAny = false;
                if (maindiv)
                    maindiv.innerHTML = "";
                games.forEach((game) => {
                    let gameTitle = game.title.toLowerCase();
                    let query = searchQuery.toLowerCase().trim();
                    if (gameTitle.includes(query)) {
                        foundAny = true;
                        let div = document.createElement("div");
                        div.className = "search-div";
                        let img = document.createElement("img");
                        img.className = "search-img";
                        img.src = game.thumbnail;
                        let dev = document.createElement("p");
                        dev.className = "search-dev";
                        dev.textContent = game.developer;
                        let title = document.createElement("h3");
                        title.className = "search-title";
                        title.textContent = game.title;
                        let deatils = document.createElement("button");
                        deatils.className = "details";
                        deatils.textContent = "View Details";
                        maindiv?.appendChild(div);
                        div.appendChild(img);
                        div.appendChild(dev);
                        div.appendChild(title);
                        div.appendChild(deatils);
                        deatils.onclick = function () {
                            if (window.localStorage.getItem("name")) {
                                window.localStorage.setItem("current_game", JSON.stringify(game));
                                window.location.href = "details.html";
                            }
                            else {
                                window.location.href = "login.html";
                            }
                        };
                    }
                });
                if (!foundAny && maindiv) {
                    maindiv.innerHTML = `<h3 style="color: white; text-align: center; margin-top: 50px;">No games found matching "${searchQuery}"</h3>`;
                }
            }
        };
        request.send();
    }
    else {
        window.location.href = "index.html";
    }
});
export {};
