let Action = document.getElementById("Action");
let Horror = document.getElementById("Horror");
let Shooter = document.getElementById("Shooter");
let RPG = document.getElementById("RPG");
let Adventure = document.getElementById("Adventure");
let Simulation = document.getElementById("Simulation");
let Sports = document.getElementById("Sports");
let form = document.querySelector("form");
let search = document.getElementById("search");
if (form && search) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let searchValue = search.value.trim();
        if (searchValue !== "") {
            window.localStorage.setItem("search_query", searchValue);
            window.location.href = "search.html";
        }
    });
}
let myrequest = new XMLHttpRequest();
myrequest.open("GET", "https://www.freetogame.com/api/games");
myrequest.onreadystatechange = function () {
    if (myrequest.readyState == 4 && myrequest.status == 200) {
        let games = JSON.parse(this.responseText);
        games.forEach((game) => {
            let gamediv = document.createElement("div");
            gamediv.className = "game-div";
            let img = document.createElement("img");
            img.className = "game-img";
            img.src = game.thumbnail;
            let dev = document.createElement("span");
            dev.className = "game-dev";
            dev.textContent = game.developer;
            let title = document.createElement("h3");
            title.className = "game-name";
            title.textContent = game.title;
            let details = document.createElement("button");
            details.className = "details";
            details.textContent = "View Details";
            gamediv.appendChild(img);
            gamediv.appendChild(dev);
            gamediv.appendChild(title);
            gamediv.appendChild(details);
            details.onclick = function () {
                if (window.localStorage.getItem("name")) {
                    window.localStorage.setItem("current_game", JSON.stringify(game));
                    window.location.href = "details.html";
                }
                else {
                    window.location.href = "login.html";
                }
            };
            let genre = game.genre.toLowerCase();
            if (genre.includes("shooter") || genre.includes("royale")) {
                Shooter?.appendChild(gamediv);
            }
            else if (genre.includes("rpg") || genre.includes("mmo")) {
                RPG?.appendChild(gamediv);
            }
            else if (genre.includes("action") || genre.includes("fighting")) {
                Action?.appendChild(gamediv);
            }
            else if (genre.includes("sports") || genre.includes("racing")) {
                Sports?.appendChild(gamediv);
            }
            else if (genre.includes("horror") || genre.includes("survival") || genre.includes("zombie")) {
                Horror?.appendChild(gamediv);
            }
            else if (genre.includes("adventure")) {
                Adventure?.appendChild(gamediv);
            }
            else if (genre.includes("simulation")) {
                Simulation?.appendChild(gamediv);
            }
            else {
                if (Horror && Horror.children.length < 12) {
                    Horror.appendChild(gamediv);
                }
                else if (Simulation && Simulation.children.length < 12) {
                    Simulation.appendChild(gamediv);
                }
                else if (Sports && Sports.children.length < 12) {
                    Sports.appendChild(gamediv);
                }
                else {
                    Adventure?.appendChild(gamediv);
                }
            }
        });
    }
};
myrequest.send();
let up = document.getElementById("scrollTopBtn");
window.onscroll = function () {
    if (window.scrollY > 300) {
        up?.classList.add("show");
    }
    else {
        up?.classList.remove("show");
    }
};
if (up) {
    up.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}
let login = document.getElementById("login");
if (login) {
    login.onclick = function () {
        window.location.href = "login.html";
    };
    if (window.localStorage.getItem("name")) {
        login.innerHTML = `Welcome ${window.localStorage.getItem("name")}`;
        login.onclick = function (e) {
            e.preventDefault();
        };
    }
}
export {};
