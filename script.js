console.log("loaded");
//using the javascript date class, we get the current time and date on the visitor's computer


function updateClock() {
var currentTime = new Date();

var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes();
var currentSeconds = currentTime.getSeconds();

//formatting the time to a string: HH:MM:SS XX, where XX is either “AM” or “PM” using a ternary operator here ? for true : for false

currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

var amOrPm = (currentHours < 12) ? "AM" : "PM";
currentHours = (currentHours > 12) ? hours - 12 : currentHours;
currentHours = (currentHours === 0) ? 12 : currentHours;


var time = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + amOrPm;

$("#clock").html(time);
}

