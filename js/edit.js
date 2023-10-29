function deleteItem(listItem) {
    const titleElement = listItem.querySelector('.product_title');
    const productTitle = titleElement.textContent;

    fetch(`http://localhost:3000/products/${productTitle}`, {
        method: 'DELETE',
    })
        .then((response) => {
            if (response.status === 200) {
                console.log('Product deleted successfully.');
            } else if (response.status === 404) {
                console.error('Product not found.');
            }
        })
        .catch((error) => {
            console.error('Error deleting product:', error);
        });

    listItem.remove();
    localStorage.removeItem(productTitle);
}

function updateItem(listItem, productTitle, newTitle, newPrice) {
    const titleElement = listItem.querySelector(".product_title"); 
    fetch(`http://localhost:3000/products/${productTitle}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ price: newPrice }),
    })
        .then((response) => {
            if (response.status === 200) {
                console.log('Product updated successfully.');
                titleElement.textContent = newTitle;
                listItem.querySelector(".product_price").textContent = newPrice + ' $';
            } else if (response.status === 404) {
                // Ви можете розглянути створення нового продукту,
                // якщо він не існує на сервері.
                console.error('Product not found.');
            }
        })
        .catch((error) => {
            console.error('Error updating product:', error);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    const itemList = document.getElementById("items-container");

    itemList.addEventListener("click", function (event) {
        const listItem = event.target.closest(".product");

        if (!listItem) return;

        if (event.target.classList.contains("edit_button")) {
            const titleElement = listItem.querySelector(".product_title");
            const priceElement = listItem.querySelector(".product_price");

            const titleInput = document.createElement("input");
            titleInput.type = "text";
            titleInput.className = "edit-title-input";
            titleInput.value = titleElement.textContent;

            const priceInput = document.createElement("input");
            priceInput.type = "text";
            priceInput.className = "edit-price-input";
            priceInput.value = priceElement.textContent;

            const productTitle = titleElement.textContent;

            localStorage.removeItem(productTitle);

            titleElement.replaceWith(titleInput);
            priceElement.replaceWith(priceInput);

            const editButton = listItem.querySelector(".edit_button");
            const saveButton = listItem.querySelector(".save_button");
            editButton.style.display = "none";
            saveButton.style.display = "inline-block";

            saveButton.addEventListener("click", function () {
                const newTitle = titleInput.value;
                const newPrice = priceInput.value;

                if (!/^\d+$/.test(newPrice)) {
                    alert("Поле Price повинно містити лише цифри.");
                    return;
                }

                if (!/^[a-zA-Z]+$/.test(newTitle)) {
                    alert("Поле Title повинно містити лише букви.");
                    return;
                }

                // Оновлення продукту на сервері та оновлення відображення
                updateItem(listItem, productTitle, newTitle, newPrice);

                const newTitleElement = document.createElement("h5");
                newTitleElement.className = "product_title";
                newTitleElement.textContent = newTitle;

                const newPriceElement = document.createElement("p");
                newPriceElement.className = "product_price";
                newPriceElement.textContent = newPrice + " $";

                titleInput.replaceWith(newTitleElement);
                priceInput.replaceWith(newPriceElement);

                editButton.style.display = "inline-block";
                saveButton.style.display = "none";
            });
        } else if (event.target.classList.contains("delete_button")) {
            deleteItem(listItem);
        }
    });
});
