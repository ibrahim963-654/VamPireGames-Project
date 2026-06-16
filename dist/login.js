let form = document.querySelector("form");
let input = document.getElementById("name");
form?.addEventListener("submit", function (e) {
    e.preventDefault();
    let value = input?.value;
    if (value && value.trim() !== "") {
        window.localStorage.setItem("name", value);
        window.location.assign("index.html");
    }
});
export {};
