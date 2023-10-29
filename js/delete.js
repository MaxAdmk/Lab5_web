const itemList = document.getElementById("items-container");
const deleteButton = document.querySelector("delete_button");


itemList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete_button")) {
        const titleElement = listItem.querySelector(".product_title");
        const productTitle = titleElement.textContent;
        listItem.remove();
        localStorage.removeItem(productTitle);
        const listItem = event.target.closest(".product");
    }
});