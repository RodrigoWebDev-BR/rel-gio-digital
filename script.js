
const hrs = document.getElementById('hr')
const minute = document.getElementById('min')
const second = document.getElementById('sec')

const relogio = setInterval(function time() {
    let dateToday = new Date()
    let hours = dateToday.getHours()
    let minutes = dateToday.getMinutes()
    let seconds = dateToday.getSeconds()

    if (hours < 10) hours = '0' + hours

    if (minutes < 10) minutes = '0' + minutes

    if (seconds < 10) seconds = '0' + seconds

    hrs.textContent = hours
    minute.textContent = minutes
    second.textContent = seconds
})

