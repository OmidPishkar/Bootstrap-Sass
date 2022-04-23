const showMenuButton = document.querySelector('.show-menu')
const parentMenu = document.querySelector('.parent-menu')
const menuBackdrop = document.querySelector('.menu-backdrop')


showMenuButton.addEventListener('click' , () => {
    parentMenu.style.left = '0%'
    menuBackdrop.style.left = '0%'
})

menuBackdrop.addEventListener('click' , () => {
    parentMenu.style.left = '-100%'
    menuBackdrop.style.left = '-100%'
})