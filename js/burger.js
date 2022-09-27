let menu = document.querySelector('.menu-burger')
let btn = document.querySelector('.btn')
let header = document.querySelector('.header')
let products_ist = document.querySelectorAll('.products-list')
let product_controls_addToCart = document.querySelector('.btn334')

menu.style.display = 'none'

btn.addEventListener('click', () => {
    menu.classList.toggle('active')
    header.style.display = 'none'
})
