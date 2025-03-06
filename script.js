document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll(".product button");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Товар добавлен в корзину!");
        });
    });
});