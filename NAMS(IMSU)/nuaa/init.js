const auth = new Auth();

document.querySelector(".logout").addEventListener("click", (e) => {
    auth.logOut();
});


var warningTimeoutID = undefined;
var logoutTimeoutID = undefined;
const events = ["click", "mousemove", "mousedown", "keydown"];
const body = document.querySelector("body");

window.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname === "https://mydatabase.com.ng/NAMS(IMSU)/nuaa/sample.html") {
        warningTimeoutID = setTimeout(callTimeoutFunc, 5000);
        events.forEach((event) => {
            window.addEventListener(event, eventHandler);
        });
    }
});

function callTimeoutFunc() {
    logoutTimeoutID = setTimeout(() => {
        auth.logOut();
    }, 4000);
}

function eventHandler() {
    if (logoutTimeoutID) {
        clearTimeout(logoutTimeoutID);
        if (body.children[0].classList.contains("warning"))
            body.removeChild(body.firstElementChild);
    }
    clearTimeout(warningTimeoutID);
    warningTimeoutID = setTimeout(callTimeoutFunc, 5000);
}