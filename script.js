let btnMenu = document.getElementById('bt-menus')
let menu = document.getElementById('bt-fechamento')
let overley = document.getElementById('overlay-menui')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')

})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')

})
overley.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')

})