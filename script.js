let trElements = document.querySelectorAll("tr")

for (const elem of trElements) {
    if (!elem.classList.contains("darkbg")) {
        elem.addEventListener("click", szinez)
    }
}

function szinez() {
    this.style.backgroundColor = "red"
}