var createLink = document.querySelector(".create_page");
var homeLink = document.querySelector(".home_page");
var editlink = document.querySelector(".edit_page");

createLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "create.html";
});

homeLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "index.html";
});

editlink.addEventListener("click", function (event) {
    event.preventDefault(); 
    window.location.href = "edit.html";
});