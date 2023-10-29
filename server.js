const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const productList = new Map(); // Use a Map to store your product data

app.get('/products', (req, res) => {
    const products = Array.from(productList.values());
    res.json(products);
});

app.post('/products', (req, res) => {
    const newProduct = req.body;
    productList.set(newProduct.title, newProduct.price);
    res.status(201).send('Product created successfully');
});

app.put('/products/:title', (req, res) => {
    const title = req.params.title;
    const updatedProduct = req.body;

    if (productList.has(title)) {
        productList.set(title, updatedProduct.price);
        res.json({ message: 'Product updated successfully' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

app.delete('/products/:title', (req, res) => {
    const title = req.params.title;

    if (productList.has(title)) {
        productList.delete(title);
        res.json({ message: 'Product deleted' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
