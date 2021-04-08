
function calcAge() {
    let input = document.getElementById('dob').value;
    if (Date.parse(input)) {
        var inputdate = new Date(input);
        var currdate = new Date();
        var millsec = parseInt(currdate.getTime()) - parseInt(inputdate.getTime());
        var sec = floor(millsec, 1000);
        var min = floor(sec, 60);
        var hour = floor(min, 60);
        var day = floor(hour, 24);
        var week = floor(day, 7);
        var month = monthFloor(inputdate, currdate);
        var year = yearFloor(inputdate, currdate);
        document.querySelector('#years').innerHTML = year + `<br/> years`;
        document.querySelector('#months').innerHTML = month + `<br/> Months`;
        document.querySelector('#weeks').innerHTML = week + `<br/> Weeks`;
        document.querySelector('#days').innerHTML = day + `<br/> Days`;
        document.querySelector('#hours').innerHTML = hour + `<br/> Hours`;
        document.querySelector('#minutes').innerHTML = min + `<br/> Minutes`;
        document.querySelector('#seconds').innerHTML = sec + `<br/> Seconds`;
        document.querySelector('#milliSeconds').innerHTML = millsec + `<br/> MilliSeconds`;
     } 
    }

function floor(val1, val2) {
    return Math.floor(val1 / val2);
}

function yearFloor(val1,val2) {
    var d1 = new Date(val1);
    var d2 = new Date(val2);
    return d2.getFullYear() - d1.getFullYear();
}
function monthFloor(val1,val2) {
    var year = yearFloor(val1, val2);
    var month = (year * 12) + (val2.getMonth() - val1.getMonth());
    return month-1;
}

let date = new Date();
document.querySelector("#today").innerHTML = `${date.getDate()} - 0${date.getMonth()} - ${date.getFullYear()}`;