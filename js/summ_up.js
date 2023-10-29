const summButton = document.getElementById("summ_button");
const totalPriceOutput = document.createElement("h3");

summButton.addEventListener("click", function(){
    const prices = document.querySelectorAll(".product_price");

    let total = 0;
    for (const price of prices) {
        total += parseFloat(price.textContent);
    }

    totalPriceOutput.textContent = `Total Price: ${total}$`;

    summButton.after(totalPriceOutput);
})
