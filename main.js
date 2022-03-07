// CHANING ACTIVE ELEMENTS

const button = document.getElementById('button')
const clock = document.querySelector('.clock')
const date = document.querySelector('.date')



// GETTING DATE ELEMENTS
const timeElement = document.querySelector('.time')

const actualDateElement = document.querySelector('.actual-date')

const numberElement = document.querySelector('.number-circle')

// GETTING HR/MN/SEC POINTERS
const hours = document.querySelector('.hours')

const minutes = document.querySelector('.minutes')

const seconds = document.querySelector('.seconds')

// DEFINES 1/60 MOVE OF A CLOCK
const oneStepOfSixty = 6

// ARRAYS
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const monthsNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
// //   //  //  //  //




const getTime = function () {
    let realDate = new Date()
    numberElement.classList.add('active')
    // SETTING FUNCTIONS THAT TRIGGER THE CLOCK MOVE
    const setSeconds = function () {
        seconds.style.transform = `translate(-50%, -100%) rotate(${realDate.getSeconds() * oneStepOfSixty}deg)`
    }

    const setMinutes = function () {
        minutes.style.transform = `translate(-50%, -100%) rotate(${realDate.getMinutes() * oneStepOfSixty}deg)`
    }

    const setHours = function () {
        hours.style.transform = `translate(-50%, -100%) rotate(${realDate.getHours() * oneStepOfSixty}deg)`
    }

    //  //  //  //  //  //
    // SET DATES TO BE ACTUAL
    timeElement.textContent = `${realDate.getHours() < 10? '0' + realDate.getHours(): realDate.getHours()}:${realDate.getMinutes() <10? '0' + realDate.getMinutes(): realDate.getMinutes()}:${realDate.getSeconds() <10? '0' + realDate.getSeconds(): realDate.getSeconds()}`

    actualDateElement.textContent = `${daysOfTheWeek[realDate.getDay()]}, ${monthsNames[realDate.getMonth()]}`

    numberElement.textContent = `${realDate.getDate()}`

    // TRIGGER FUNCTIONS TO MOVE A CLOCK
    setSeconds()
    setMinutes()
    setHours()
}




const changeTheme = () => {
    document.body.classList.toggle('active')
    button.classList.toggle('active')
    clock.classList.toggle('active')
    date.classList.toggle('active')
    if (button.className === 'button active') {
        button.innerHTML = 'White theme'
    } else {
        button.innerHTML = 'Dark theme'
    }
}


button.addEventListener('click', changeTheme)

setInterval(getTime, 1000)