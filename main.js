function clock() {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let AP_Meridiem = document.getElementById("Meridiem");
    AP_Meridiem = "AM";
    

    if (hours >= 12) {
        AP_Meridiem = "PM";
    }
    if (hours > 12) {
        hours -= 12;
    }
    if (hours == 0) {
        hours = "12";
    }
    
    
    minutes = (minutes < 10) ? "0" + minutes : minutes ;
    seconds = (seconds < 10) ? "0" + seconds : seconds ;
    const clocktime = `${hours} : ${minutes} : ${seconds} ${AP_Meridiem}`;
    
    document.getElementById("clock").innerHTML = clocktime;

    setTimeout(clock,1000);
}
clock();
// day of week And month :
function Weekday_Monthday(){
    const d = new Date();
    let weekDay = d.getDay();
    let month = d.getMonth();
    let monthDay = d.getDate();


    const arr_weekDays =["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
    for ( i = 0; i < arr_weekDays.length; i++) {
        if (weekDay == i) {
            weekDay = arr_weekDays[i];
        }
    }
    // if (weekDay == 0) {
    //     weekDay = "Sunday";
    // } else if (weekDay == 1) {
    //     weekDay = "Monday";
    // } else if (weekDay == 2) {
    //     weekDay = "Tuesday";
    // } else if (weekDay == 3) {
    //     weekDay = "Wednesday";
    // } else if (weekDay == 4) {
    //     weekDay = "Thursday";
    // } else if (weekDay == 5) {
    //     weekDay = "Friday";
    // } else {
    //     weekDay = "Saturday";
    // }


    const arr_months =["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
    for ( i = 0; i < arr_months.length; i++) {
        if (month == i) {
            month = arr_months[i];
        }
    }
    // if (month == 0) {
    //     month = "January";
    // } else if (month == 1) {
    //     month = "February";
    // } else if (month == 2) {
    //     month = "March";
    // } else if (month == 3) {
    //     month = "April";
    // } else if (month == 4) {
    //     month = "May";
    // } else if (month == 5) {
    //     month = "June";
    // } else if (month == 6) {
    //     month = "July";
    // } else if (month == 7) {
    //     month = "August";
    // } else if (month == 8) {
    //     month = "September";
    // } else if (month == 9) {
    //     month = "October";
    // } else if (month == 10) {
    //     month = "November";
    // } else {
    //     month = "December";
    // }

    const fullDate = `${weekDay}, ${month} ${monthDay}`;
    document.getElementById("date").innerHTML = fullDate;
    setTimeout(Weekday_Monthday,1000);
}
Weekday_Monthday();


            // stopWatch
var stopwatch = document.getElementById("stopwatch");
var startBtn = document.getElementById("start-btn");
var timeoutId ;
var ms = 0;
var sec = 0;
var min = 0;

/* function to start stopwatch */
function start(startcount) {
    if (startcount) {
        startBtn.disabled = true;
    }

    timeoutId = setTimeout(function() {
        ms = parseInt(ms);
        sec = parseInt(sec);
        min = parseInt(min);

        ms++;

        if (ms == 100) {
            sec +=  1;
            ms = 0;
        }
        if (sec == 60) {
            min += 1;
            sec = 0;
        }
        ms = (ms < 10) ? "0" + ms : ms;
        sec = (sec < 10) ? "0" + sec : sec;
        min = (min < 10) ? "0" + min : min
        

        stopwatch.innerHTML = min + ':' + sec + ':' + ms;

        // calling start() function recursivly to continue stopwatch
        start();

    }, 10); // setTimeout delay time 10 milliseconds
}

/* function to pause stopwatch */
function pause() {
    clearTimeout(timeoutId);
    startBtn.disabled = false;
}

/* function to reset stopwatch */
function reset() {
    ms = 0;
    sec = 0;
    min = 0;
    clearTimeout(timeoutId);
    stopwatch.innerHTML = '00:00:00';
    startBtn.disabled = false;
}





// calculaor 
// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function display values
function display(value) {
    document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}