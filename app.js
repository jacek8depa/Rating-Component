


const btnOne = document.querySelector('#btnOne')
const btnTwo = document.querySelector('#btnTwo')
const btnThree = document.querySelector('#btnThree')
const btnFour = document.querySelector('#btnFour')
const btnFive = document.querySelector('#btnFive')
const buttons = document.querySelectorAll('button')
let pick = document.querySelector('h3 span')
let drugi = document.querySelector('#two')
let submicik = document.querySelector('.oki')



btnOne.addEventListener('click', function () {
    for (let i of buttons) {
        i.classList.remove('clicked')
    }
    btnOne.classList.add('clicked')

    pick.innerHTML = '1';


})

btnTwo.addEventListener('click', function () {
    for (let i of buttons) {
        i.classList.remove('clicked')
    }
    btnTwo.classList.add('clicked')
    pick.innerHTML = '2';
})

btnThree.addEventListener('click', function () {
    for (let i of buttons) {
        i.classList.remove('clicked')
    }
    btnThree.classList.add('clicked')
    pick.innerHTML = '3';
})

btnFour.addEventListener('click', function () {
    for (let i of buttons) {
        i.classList.remove('clicked')
    }
    btnFour.classList.add('clicked')
    pick.innerHTML = '4';
})

btnFive.addEventListener('click', function () {
    for (let i of buttons) {
        i.classList.remove('clicked')
    }
    btnFive.classList.add('clicked')
    pick.innerHTML = '5';
})


submicik.addEventListener('click', function () {
    drugi.style.zIndex = '1';
})


