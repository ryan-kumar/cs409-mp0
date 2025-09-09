/* Your JS here. */
window.dropDown = function(action) {
    const bio = document.getElementById("dropdown");
    if (action == 1) {
       bio.classList.remove("off");
    }
    if (action == 0) {
       bio.classList.add("off");
    }
}

window.nyanMode = function() {
    const state = document.getElementById("switch").getAttribute("data-state");
    if (state === "off") {
        document.getElementById("pic").setAttribute("src", "assets/nyan.gif");
        document.getElementById("switch").setAttribute("data-state", "on");
    } else {
        document.getElementById("pic").setAttribute("src", "assets/prof.png");
        document.getElementById("switch").setAttribute("data-state", "off");
    }
}