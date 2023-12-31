document.addEventListener("DOMContentLoaded", function () {
    const productSelect = document.getElementById("product");
    const quantityInput = document.getElementById("quantity");
    const calculateButton = document.getElementById("calculate");
    const resultParagraph = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const productPrice = parseInt(productSelect.value);
        const quantity = parseInt(quantityInput.value);

        // Проверка корректности ввода данных
        const validInput = /^-?\d+$/.test(quantityInput.value);

        if (!validInput) {
            resultParagraph.textContent = "Введите корректное количество.";
        } else if (
            Number.isNaN(productPrice) ||
            Number.isNaN(quantity) ||
            quantity < 0
        ) {
            resultParagraph.textContent = "Введите корректные данные.";
        } else {
            const totalPrice = productPrice * quantity;
            const resultText = "Стоимость заказа: " + totalPrice + " рублей";
            resultParagraph.textContent = resultText;
        }
    });
});
