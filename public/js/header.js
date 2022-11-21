console.log("Start Header JS");

const searchBar = document.querySelector("#search");

searchBar.addEventListener("mouseenter", openSearchBar);
searchBar.addEventListener("mouseleave", closeSearchBar);

function openSearchBar(event) {
    event.preventDefault();
    searchBar.classList.add("active");
}

function closeSearchBar(event) {
    event.preventDefault();
    searchBar.classList.remove("active");
}

