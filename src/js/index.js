/* Your JS here. */
function dropDown(action) {
    const bio = document.getElementById("dropdown");
    if (action == 1) {
       bio.classList.remove("off");
    }
    if (action == 0) {
       bio.classList.add("off");
    }
}