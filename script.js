
var today = new Date();

var myDay = today.getDate();
var myMonth = today.getMonth();
var myYear = today.getFullYear();


let day = document.getElementById("day");
let month = document.getElementById("mon");
let year = document.getElementById("year");

let hours = document.getElementById("hours");
let mints = document.getElementById("min");
let secs = document.getElementById("sec");

let second = today.getSeconds();
let min = today.getMinutes()
let hour = today.getHours();
let meridiem = 'AM';

let merid = document.getElementById("mer");


if (hour === 00) {
    hour = 12
    meridiem = 'AM';
}
else if (hour === 12) {
    meridiem = 'PM';
}
else if (hour > 12) {
    hour = hour - 12
    meridiem = 'PM';
}

day.innerHTML = `${myDay}`;
month.innerHTML = `${myMonth}`;
year.innerHTML = `${myYear}`;


hours.innerHTML = `${hour}`;
mints.innerHTML = `${min}`;
secs.innerHTML = `${second}`;
merid.innerHTML = `${meridiem}`;