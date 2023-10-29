for (let i = 0; i < localStorage.length; i++) {
    const title = localStorage.key(i);
    const price = localStorage.getItem(title);

    if (title && price) {
        const listItem = document.createElement("li");
        listItem.className = "product";
        listItem.innerHTML = `
            <img src="./img/Hoodie.png" alt="hoodie img" class="item_image">
            <div class="product_body">
                <h5 class="product_title">${title}</h5>
                <p class="product_price">${price} $</p>
            </div>
        `;

        const itemList = document.getElementById("items-container");
        itemList.appendChild(listItem);
    }
}