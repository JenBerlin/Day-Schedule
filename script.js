var today = moment();
$("#currentDay").text(today.format('dddd, MMMM Do'))

// It goes through the time/moment comparing the value and sets a specific styling 
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


function setText(){
const localStorageHourData = JSON.parse(localStorage.getItem("hourlyData"))
// If there is no object in local storage push in an empty object
    if (localStorageHourData === null) {
        localStorage.setItem("hourlyData", JSON.stringify({}))
    }

    const timeBlock = parseInt($(this).data("time"),10)
    const plannedEvent = localStorageHourData[timeBlock]
    $(this).find("textarea").text(plannedEvent)
}
// Set text for each time block
function mapThroughBlocks(){
    const timeBlockArray = $(".time-block .row")
    timeBlockArray.map(setText)
}

function onClick(event){
    // Got old box from local storage 
    const localStorageHourData = JSON.parse(localStorage.getItem("hourlyData"));
    const target = $(event.target)
    console.log(target)

    if (target.is("button")) {
        const key = target.attr("id")
        const value = target.parent().find("textarea").val()
        
        const newScheduleObject = {
            // Old data out of box 
            ...localStorageHourData, 
            // New data  
            [key]: value
        }
        // New box with old data and new data put back into local storage
        localStorage.setItem("hourlyData", JSON.stringify(newScheduleObject))
    }

}

function runOnReady(){
    mapThroughBlocks()

    $(".time-block").click(onClick)
}

$(window).ready(runOnReady)