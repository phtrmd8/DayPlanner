// variable for getting current date with Moment
let now = moment();

// load moment.js library
$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'))

// WHEN viewing the timeblocks for the day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
$(".saveBtn").each(function () {
    // variable for current time in hours
    let current = moment().hours()
    // take this element's id & split the id & parse the second value 
    let hour = parseInt($(this).attr("id").split("-")[1])

    // compare hour with current time
    if (hour < current) {
        $(this).parent().addClass("past")          // add class of past
    } else if (hour === current) {
        $(this).parent().addClass("present")     // add class of present
    } else {
        $(this).parent().addClass("future")       // add class of future
    }

    // WHEN refreshing the page     THEN the saved events persist
    // take info from local storage with this id
    let text = localStorage.getItem($(this).attr("id"))
    // put value in textarea
    $(this).siblings("textarea").val(text)
})

// WHEN clicking into a timeblock       THEN user can enter an event
// WHEN clicking the save button for that timeblock
$(".saveBtn").on('click', function () {
    let hour = parseInt($(this).attr("id").split("-")[1])
    let text = $(this).siblings("textarea").val()
    // THEN the text for that event is saved in local storage
    localStorage.setItem($(this).attr("id"), text)
})