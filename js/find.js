// const findButton = document.getElementById("find_button");
// const findInput = document.getElementById("find_input");

// findButton.addEventListener("click", function () {
//     const searchText = findInput.value;

//     const items = document.querySelectorAll(".product");
//     let found = false;
//     for (const item of items) {
//         const titleElement = item.querySelector(".product_title");
//         if (titleElement && titleElement.textContent === searchText) {
//             found = true;

//             item.scrollIntoView({ behavior: "smooth" });

//             item.style.backgroundColor = "gray";

//             setTimeout(function () {
//                 item.style.backgroundColor = "";
//             }, 3000);

//             break;
//         }
//     }

//     if (!found) {
//         alert(`Елемент з заголовком "${searchText}" не знайдено.`);
//     }
// });

const findButton = document.getElementById("find_button");
const findInput = document.getElementById("find_input");

findButton.addEventListener("click", function () {
    const searchText = findInput.value;

    fetch(`http://localhost:3000/products/${searchText}`, {
        method: 'GET',
    })
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                // Replace or update the frontend logic to handle the found product(s) as needed.
            } else {
                alert(`Element with title "${searchText}" not found.`);
            }
        })
        .catch((error) => {
            console.error('Error searching for product:', error);
        });
});
