document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('clicked');
    });
});
