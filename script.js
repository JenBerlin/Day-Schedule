var today = moment();
$("#currentDay").text(today.format('dddd, MMMM Do'))

setInterval(() => {
    const currentHour = moment().hour()
    for (let hour = 0; hour < 24; hour++) {
        const id = '#' + hour
        if (hour < currentHour) {
            $(id).addClass("past")
        } else if (hour > currentHour) {
            $(id).addClass("future")
        } else {
            $(id).addClass("present")
        }
    }
}, 1000)

function setText (){
const localStorageHourData = JSON.parse(localStorage.getItem("hourlyData"))||[];
    console.log(localStorageHourData)
    const timeBlock = parseInt($(this).data("time"),10)
    const plannedEvent = localStorageHourData[timeBlock]
    $(this).find("textarea").text()
}
setText()

function onClick(event){
    const localStorageHourData = JSON.parse(localStorage.getItem("hourlyData"))||[];
    const target = $(event.target)
    console.log(target)
}

function runOnReady(){
    $(".container").click(onClick)
}

$(window).ready(runOnReady)