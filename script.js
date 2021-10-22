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
