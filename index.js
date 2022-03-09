const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const Birthdate = document.querySelector(`.birthdate`)
const deadline = document.querySelector(`.deadline`)
const items = document.querySelectorAll(`.deadline-format h4`)

// console.log(items);

let futureDate = new Date(2021, 11, 24, 10, 0, 0)
    // console.log(futureDate)

const year = futureDate.getFullYear()
    // const hours = futureDate.getHours()
    // const mins = futureDate.getMinutes()
const date = futureDate.getDate()
const month = futureDate.getMonth()
const weekday = futureDate.getDay()
Birthdate.textContent = `birthday is on ${date} ${weekdays[weekday]} ${months[month]} ${year}   12:00 am`


const futuretime = futureDate.getTime()

// console.log(futuretime)

function getTimeRemaining() {
    const today = new Date().getTime()
        // console.log(today)
    const time = futuretime - today
        // console.log(time);
        // 1s=1000ms
        // 1m=60s
        // 1h=60m
        // 1d=24h

    // values in ms
    const day1 = 24 * 60 * 60 * 1000
    const hour1 = 60 * 60 * 1000
    const min1 = 60 * 1000

    let day = Math.floor(time / day1)
        // console.log(day)
    let hour = Math.floor((time % day1) / hour1)
        // console.log(hour)
    let min = Math.floor((time % hour1) / min1)
        // console.log(min)
    let sec = Math.floor((time % min1) / 1000)
        // console.log(sec)

    const values = [day, hour, min, sec]

    function format(item) {
        if (item < 10) {
            return item = `0${item}`
        }
        return item
    }

    items.forEach(function(item, index) {
        // console.log(item)
        // console.log(index)
        item.innerHTML = format(values[index])
    })
    if (time < 0) {
        clearInterval(count)
        deadline.innerHTML = `<h4 class = "B-day">
        its your birthday 
        <h4>`
    }

}
// countdown
let count = setInterval(getTimeRemaining, 1000)
getTimeRemaining()