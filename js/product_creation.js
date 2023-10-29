const form = document.getElementById('add_form');

function addItemToStorage(title, price) {
    if (title && price) {
        localStorage.setItem(title, price);

        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, price }),
        })
            .then((response) => {
                if (response.status === 201) {
                    console.log('Product created successfully.');
                    form.reset();
                } else {
                    console.error('Failed to create product');
                }
            })
            .catch((error) => {
                console.error('Error creating product:', error);
            });
    } else {
        alert('Please fill in both fields (Title and Price).');
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const titleInput = document.getElementById('title_input');
    const priceInput = document.getElementById('price_input');

    const title = titleInput.value;
    const price = priceInput.value;

    if (!/^\d+$/.test(price)) {
        alert('Price field should only contain digits.');
        return;
    }

    if (!/^[a-zA-Z]+$/.test(title)) {
        alert('Title field should only contain letters.');
        return;
    }

    addItemToStorage(title, price);

    titleInput.value = '';
    priceInput.value = '';
});
