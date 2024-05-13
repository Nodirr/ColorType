let inp = document.querySelectorAll('.colors input')
let box = document.querySelector('.gradient-box')
let menu = document.querySelector('.select-box select')
let txt = document.querySelector('textarea')
let body = document.body
let btn = document.querySelector('.copy')


function gradientGenerator(){
    const gradient = `linear-gradient(${menu.value}, ${inp[0].value}, ${inp[1].value})`;
    

    box.style.background = gradient
    body.style.background = gradient
    txt.value = `background: ${gradient};`
    console.log(gradient);
}

inp.forEach((el) =>{
    el.addEventListener('input', gradientGenerator)

})

function copyColor(){
    navigator.clipboard.writeText(txt.value)
    btn.innerHTML = "Rang kopiya qilindi!"

    setTimeout(() => (btn.innerText = 'Rangni olish!'),2000)
}
menu.addEventListener('change', gradientGenerator)
btn.addEventListener('click', copyColor)