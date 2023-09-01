// collapse.js
document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const submenu = this.nextElementSibling;
            submenu.classList.toggle('collapsed');
        });
    });
});
