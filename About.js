function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    sidebar.classList.toggle('active');

    if (sidebar.classList.contains('active')) {
        menuToggle.style.left = '270px';
    } else {
        menuToggle.style.left = '20px';
    }
}