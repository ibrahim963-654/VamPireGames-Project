let form = document.querySelector("form");
let input = document.getElementById("name");
form?.addEventListener("submit", function (e) {
    e.preventDefault();
    let value = input?.value;
    if (value && value.trim() !== "") {
        window.localStorage.setItem("name", value);
        if (document.referrer) {
    window.history.back();
} else {
    window.location.href = "index.html";
}
    }
});
export {};
