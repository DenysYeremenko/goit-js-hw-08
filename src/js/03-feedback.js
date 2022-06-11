import throttle from 'lodash.throttle'

const userMessageLocal = localStorage.getItem('userMessage')
const formEl = document.querySelector('.feedback-form')
const submitBtnEl = document.querySelector('.feedback-form button')
const userDataObj = {}

if(userMessageLocal) {
    console.log(userMessageLocal);
}
localStorage.removeItem('userMessage')

if(!(localStorage.getItem('feedback-form-state'))) {
    localStorage.setItem('feedback-form-state', '{}')
}



let localUserData = JSON.parse(localStorage.getItem('feedback-form-state'))


if(localUserData.email) {
    formEl.email.value = localUserData.email
    userDataObj.email = formEl.email.value
}

if(localUserData.message) {
    formEl.message.value = localUserData.message
    userDataObj.message = localUserData.message
}

const inputSaveFn = (ev) => {
    if(userDataObj[ev.target.name]) {
        userDataObj[ev.target.name] += ev.target.value
    }
    userDataObj[ev.target.name] = ev.target.value
    localStorage.setItem('feedback-form-state', JSON.stringify(userDataObj))
}

formEl.addEventListener('input', throttle(inputSaveFn, 500))

const submitFn = () => {
    console.log(userDataObj);
    localStorage.setItem('feedback-form-state', '')
    formEl.reset()
    localStorage.setItem('userMessage', JSON.stringify(userDataObj))
}

submitBtnEl.addEventListener('click', submitFn)


