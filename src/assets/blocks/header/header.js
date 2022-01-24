document.addEventListener('DOMContentLoaded', function(){
    let burger = document.querySelector('.burger');
    let mobileMenu = document.querySelector('.mobile-menu');

    burger.onclick = () => {
        if (mobileMenu.classList.contains('mobile-menu_open')) {
            mobileMenu.classList.remove('mobile-menu_open')
        } else {
            mobileMenu.classList.add('mobile-menu_open')
        }
    }

    let dropdown = document.querySelectorAll('.dropdown');

    dropdown.forEach(item => item.onclick = (item) => {
        let open = item.target.classList.contains('dropdown_open')
        if (!open) {
            dropdown.forEach(item => {
                item.classList.remove("dropdown_open");
            })
            item.target.classList.add("dropdown_open");
        } else {
            dropdown.forEach(item => {
                item.classList.remove("dropdown_open");
            })
        }
    })

})