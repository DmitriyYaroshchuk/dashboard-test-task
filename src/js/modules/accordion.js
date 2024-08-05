function accordion() {
    const btns = document.querySelectorAll("button.nav__btn");
    btns.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle("active");
        });
    });
}
export default accordion;