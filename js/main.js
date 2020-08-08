const navMenu = document.querySelector('.nav-menu');
const toggleCollapse = document.querySelector('.toggle-collapse');

toggleCollapse.addEventListener('click', () => {
    navMenu.classList.toggle('collapse')
})

