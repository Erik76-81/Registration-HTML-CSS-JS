const wrapper = document.querySelector('.wrapper')
// const loginlink=document.querySelector('.login-link')
let back = document.querySelector('#back')
let closebtn = document.querySelector('#close')
let href = document.querySelector('#href')
let regbox = document.querySelector('.form-box-register')
let formbox = document.querySelector('.form-box')
let hrefout = document.querySelector('#hrefout')
let btnlogin = document.querySelector('#btnlogin')
let forgot = document.querySelector('#forgot')
let forgotpass = document.querySelector('.form-forgot')
href.addEventListener('click', () => {
    regbox.classList.add('leftregbox')
    formbox.classList.add('formboxleft')
    wrapper.classList.add('wrapperheigth')
})
hrefout.addEventListener('click', () => {
    regbox.classList.remove('leftregbox')
    formbox.classList.remove('formboxleft')
    wrapper.classList.remove('wrapperheigth')
})
btnlogin.addEventListener('click', () => {
    wrapper.classList.add('wrapperblock')
    wrapper.classList.add('form-boxblock')
})
closebtn.addEventListener('click', () => {
    wrapper.classList.remove('wrapperblock')

})
forgot.addEventListener('click', () => {
    forgotpass.classList.add('form-forgot-left')
    regbox.classList.add('leftregistrbox')
    wrapper.classList.add('wrapperheigthemail')
})
back.addEventListener('click', () => {
    forgotpass.classList.remove('form-forgot-left')
    regbox.classList.remove('leftregistrbox')
    wrapper.classList.remove('wrapperheigthemail')
})



let burger =document.querySelector('#burger')
let burgerul=document.querySelector('.burger-ul')
burger.addEventListener('click',()=>{
    burgerul.classList.toggle('burgerblock')
})