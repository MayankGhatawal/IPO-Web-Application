// JavaScript to manage active state
const menuItems = document.querySelectorAll('.menu ul li a');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(link => link.parentElement.classList.remove('active'));
        item.parentElement.classList.add('active');
    });
});