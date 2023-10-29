const sortButton = document.getElementById("sort_button");

function renderList() {
    const itemList = document.getElementById("items-container");
    itemList.innerHTML = "";

    const itemArray = []; 

    for (let i = 0; i < localStorage.length; i++) {
        const title = localStorage.key(i);
        const price = parseFloat(localStorage.getItem(title));

        if (title && !isNaN(price)) {
            itemArray.push({ title, price });
        }
    }

    itemArray.sort((a, b) => a.price - b.price);

    itemArray.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.className = "product";
        listItem.innerHTML = `
            <img src="./img/Hoodie.png" alt="hoodie img" class="item_image">
            <div class="product_body">
                <h5 class="product_title">${item.title}</h5>
                <p class="product_price">${item.price} $</p>
            </div>
        `;
        itemList.appendChild(listItem);
    });
}

// renderList();


sortButton.addEventListener("click", function () {
    const itemArray = [];

    for (let i = 0; i < localStorage.length; i++) {
        const title = localStorage.key(i);
        const price = parseFloat(localStorage.getItem(title));

        if (title && !isNaN(price)) {
            itemArray.push({ title, price });
        }
    }

    itemArray.sort((a, b) => a.price - b.price);

    for (const item of itemArray) {
        localStorage.removeItem(item.title);
    }

    itemArray.forEach((item) => {
        localStorage.setItem(item.title, item.price);
    });
    
    renderList();
});

// renderList();
