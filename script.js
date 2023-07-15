
window.onscroll = () => {
    const navBar = document.getElementById("nav-bar");
    if (window.scrollY > 80) {
        navBar.classList.add('on-scroll')

    } else {
        navBar.classList.remove('on-scroll')
       




    }
};