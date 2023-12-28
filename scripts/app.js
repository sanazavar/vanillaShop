let $ = document

let searchImgElem = $.querySelector('.search__img')
let searchInpuTwrapper = $.querySelector('.search__input__wrapper')
let btnSearchElem = $.querySelector('.btnSearch')
let closeSearchBar = $.querySelector('.x')
let prevElem = $.querySelector('.prev')
let nexElem = $.querySelector('.next')
let landingPhotoImg = $.querySelector('.landing_photo__img')


let landingImageArray = [
    "images/logo/landing.png",
    "images/logo/landing2.png",
    "images/logo/landing3.png",
]
let indexLanding = 0
let plusButtonElems = $.querySelectorAll('.plusButton')
let answerWrapperElems = $.querySelectorAll('.answer__wrapper')
let registerLinkElm = $.querySelector('.register__link')
let modalElem = $.querySelector('.modal')
let enteringForm = $.querySelector('.entering__form')
let formClose = $.querySelector('.formClose')
let formCloseLoginElem=$.querySelector('.formCloseLogin')
let sectionsBlurElms = $.querySelector('.sections')


let inputEmailElem = $.querySelector('.entering__form__input')
let inputPasswordElem = $.querySelector('.entering__form__password')
let inputPasswordRepeatElem = $.querySelector('.entering__form__password__repeat')
let formSubmit = $.querySelector('.entering__form__submit')
let passValidationSpan = $.querySelector('.passValidation')
let passReapetValidationSpan = $.querySelector('.passReapetValidation')
let modalEnteringElem = $.querySelector('.modalEntering')

let loginElem = $.querySelector('.login__link')
let modalLoginElem = $.querySelector('.modal__login')
let btnIconElem = $.querySelector('.btn-icon')
let modalLoginElm=$.querySelector('.modal__login')



searchImgElem.addEventListener('click', function () {
    searchInpuTwrapper.classList.toggle('showSearchBar')
    if (searchInpuTwrapper.className.includes('showSearchBar')) {
        btnSearchElem.style.display = 'block'
    }


})

closeSearchBar.addEventListener('click', function () {

    searchInpuTwrapper.classList.remove('showSearchBar')

})


function showNextLanding() {
    indexLanding++
    if (indexLanding > landingImageArray.length - 1) {
        indexLanding = 0

    }
    landingPhotoImg.setAttribute('src', landingImageArray[indexLanding])
    // console.log(indexLanding)

}

function showPrevoiusLanding() {
    indexLanding--
    if (indexLanding < 0) {
        indexLanding = landingImageArray.length - 1
    }
    landingPhotoImg.setAttribute('src', landingImageArray[indexLanding])
    // console.log(indexLanding)
}


function showModal(event) {
    event.preventDefault()

    modalElem.style.display = 'block'
    sectionsBlurElms.style.filter = 'blur(10px)'
}

function closeModal() {
    modalElem.style.display = 'none'
    modalLoginElm.style.display = 'none'
    sectionsBlurElms.style.filter = 'blur(0px)'
}

plusButtonElems.forEach(function (btn, index) {
    let answerWrapperElem = answerWrapperElems[index]
    btn.addEventListener('click', function () {
        answerWrapperElem.classList.toggle('active')
    })
})

function passBlureValid() {
    let passValue = inputPasswordElem.value
    if (passValue.length < 6) {
        inputPasswordElem.style.bordeBottom = '2px solid red'
        passValidationSpan.innerHTML = 'جداقل طول پسورد 6کاراکتر'

    } else {
        inputPasswordElem.style.borderBottom = '2px solid green'
        passValidationSpan.style.color = 'green'
        passValidationSpan.innerHTML = 'صحیح است'
    }
}

function passRepeateBlurValid() {
    let passRepeatValue = inputPasswordRepeatElem.value
    if (passRepeatValue < 6) {
        inputPasswordRepeatElem.style.bordeBottom = '2px solid red'
        passReapetValidationSpan.innerHTML = 'جداقل طول پسورد 6کاراکتر'

    } else {
        inputPasswordRepeatElem.style.borderBottom = '2px solid green'
        passReapetValidationSpan.style.color = 'green'
        passReapetValidationSpan.innerHTML = 'صحیح است'
    }

}

enteringForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (inputPasswordElem.value !== inputPasswordRepeatElem.value) {
        // alert('Passwords do not match.');
        modalEnteringElem.style.display = 'inline'
        modalEnteringElem.style.backgroundColor = 'red'
        modalEnteringElem.innerHTML = 'خوشگلم اطلاعات وارد شده رو مجدد چک کن'
        setInterval(function () {
            modalEnteringElem.style.display = 'none'

        }, 3000)


    } else {
        modalEnteringElem.style.display = 'inline'
        modalEnteringElem.style.backgroundColor = 'green'
        modalEnteringElem.innerHTML = 'تبریک میگم. عضوی از ما شدی:))))'
        setInterval(function () {
            modalEnteringElem.style.display = 'none'

        }, 3000)


        // alert('Welcome!');
    }

    resetInputs()

})

function resetInputs(){
    enteringForm.reset()
    inputPasswordRepeatElem.style.borderBottom = 'none'
    inputPasswordElem.style.borderBottom = 'none'
    passReapetValidationSpan.innerHTML = ''
    passValidationSpan.innerHTML = ''

}
function showLoginModal(e) {
    e.preventDefault()
    modalLoginElem.style.display = 'block'
}


inputPasswordElem.addEventListener('blur', passBlureValid)
inputPasswordRepeatElem.addEventListener('blur', passRepeateBlurValid)
formClose.addEventListener('click', closeModal)
formCloseLoginElem.addEventListener('click',closeModal)
registerLinkElm.addEventListener('click', showModal)
nexElem.addEventListener('click', showNextLanding)
prevElem.addEventListener('click', showPrevoiusLanding)
setInterval(showNextLanding, 3000)
loginElem.addEventListener('click', showLoginModal)

