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
        if (!item.target.classList.contains('dropdown')) {
            return
        }
        let open = item.target.classList.contains('dropdown_open');

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


    let languageCountry = document.querySelectorAll('.language__country');
    languageCountry.forEach(item => {
        let inputVal = item.querySelector('input')
        item.onclick = (val) => {
            languageCountry.forEach(item => {
                item.classList.remove('language__country_active')
            })

            if (inputVal.checked) {

                item.classList.add('language__country_active')

                let languageBlock = document.querySelector('.language__block')
                let languageFlag = languageBlock.querySelector('.language__flag')

                languageFlag.classList.remove('language__flag_italia')
                languageFlag.classList.remove('language__flag_france')
                languageFlag.classList.remove('language__flag_deutschland')

                switch (inputVal.value) {
                    case '1':
                        languageFlag.classList.add('language__flag_italia')
                        break
                    case '2':
                        languageFlag.classList.add('language__flag_france')
                        break
                    case '3':
                        languageFlag.classList.add('language__flag_deutschland')
                        break
                    default:
                        languageFlag.classList.add('language__flag_italia')
                }
            }
        }
    })

    let languageItem = document.querySelectorAll('.language__item');
    languageItem.forEach(item => {

        item.onclick = () => {
            languageItem.forEach(item => {
                item.classList.remove('language__item_active')
            })
            item.classList.add('language__item_active')

            let languageBlock = document.querySelector('.language__block')
            let languageText = languageBlock.querySelector('.language__text')
            languageText.textContent = item.textContent

        }
    })
})