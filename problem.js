// 1 - check if input variable is number or not :
function problem1() {
    const inputbox = document.getElementById("numOrNot").value;
    let checkinputbox = document.getElementById("problem1");

    if (isNaN(inputbox)) {
        checkinputbox.innerHTML = "not a number";
    }
    if (isNaN(inputbox) == false) {
        checkinputbox.innerHTML = "it's a number";
    }
    if (inputbox.length < 1) {
        checkinputbox.innerHTML = "please enter value";
    }
}



// 2- find the large of two numbers and print the grater :
function problem2() {
    const num1box = document.getElementById("num1").value;
    const num2box = document.getElementById("num2").value;
    let checknumboxes = document.getElementById("problem2");

    
    if (num1box > num2box) {
        checknumboxes.innerHTML = `${num1box} greater than ${num2box}`;
    } else if (num2box > num1box) {
        checknumboxes.innerHTML = `${num2box} greater than ${num1box}`;
    } else {
        checknumboxes.innerHTML = `${num1box} equal ${num2box}`;
    }
}



// 3- write a function to print even numbers in given array :
function EvenNumbers() {
    const arr_numbers = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10];
    let evenNumbers = document.getElementById("problem3");
    for (i=0 ; i < arr_numbers.length ; i++ ) {
        if (arr_numbers[i] % 2 == 0) {
            evenNumbers.innerHTML += arr_numbers[i] + " - ";
        }
    }
}
EvenNumbers();



// 4- write a function to get current date :
function currentDate(){
    const d = new Date();
    let weekDay = d.getDay();
    let month = d.getMonth();
    let monthDay = d.getDate();
    let year = d.getFullYear();


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
        if (month === i) {
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

    const fullDate = `${weekDay}, ${month} ${monthDay}  ${year}`;
    document.getElementById("date").innerHTML = fullDate;
    setTimeout(currentDate,1000);
}
currentDate();




// 5- write a function to get current date use the slash:
function currentDate_slash(){
    const d = new Date();
    let month = d.getMonth();
    let monthDay = d.getDate();
    let year = d.getFullYear();


    const arr_months =["1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" , "11" , "12"];
    for ( i = 0; i < arr_months.length; i++) {
        if (month === i) {
            month = arr_months[i];
        }
    }
    const fullDate = `${monthDay} / ${month} / ${year}`;
    document.getElementById("dateSlash").innerHTML = fullDate;
    setTimeout(currentDate,1000);
}
currentDate_slash();