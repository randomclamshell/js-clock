//using the javascript date class, we get the current time and date on the visitors computer

var currentTime = new Date();

var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

console.log(currentTime);