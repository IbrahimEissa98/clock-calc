// 1- Create a function to calculate Average to a group of numbers (at least 10 numbers).
function AverageOfNums() {
    const nums = [10,20,30,40,50,60,70,80,90,100];
    return (nums[0]+nums[1]+nums[2]+nums[3]+nums[4]+nums[5]+nums[6]+nums[7]+nums[8]+nums[9])/10;
}

const nums = [10,20,30,40,50,60,70,80,90,100]
document.getElementById("problem1").innerHTML = `Average = (10+20+30+40+50+60+70+80+90+100) / 10 = ${AverageOfNums()}`;

// 2- Write a function that takes the base and height of a triangle and return its area.
function triangleArea(base , height) {
    return 0.5 *base * height;
}
document.getElementById("problem2").innerHTML = `Triangle Area = 0.5 * 10 * 20 = ${triangleArea(10,20)} cm`;

//  3- Create a function that takes the age in years and returns the age in days and print it on console.
function yearsToDays(years) {
    return years*365 ;
}
document.getElementById("problem3").innerHTML = `25 Years to Days = 25 * 365 = ${yearsToDays(25)} days`;
console.log(yearsToDays(25) + " years");

// 4- Create a function takes two numbers and return thier sum.
function sumOfTwoNums(num1,num2) {
    const total=num1+num2;
    return total;
}
document.getElementById("problem4").innerHTML = `Sum = 10 + 10 = ${sumOfTwoNums(10,10)}`;

// 5- Create a function that takes an array containing only numbers and return the first element.
function ArrFirstElement() {
    const numbers = [578,56,656,489,856,656,8];
    return numbers[0];
}
document.getElementById("problem5").innerHTML = `First Number = ${ArrFirstElement()}`;

// 6- Create a function show your name in HTML document.
function myName() {
    const name = "Ibrahim Eissa";
    return name;
}
document.getElementById("problem6").innerHTML = `My Name is : ${myName()}`;

// 7- Write a function that takes an integer hours and converts it to second.
function hoursTo_Seconds(hours) {
    return hours*60*60;
}
document.getElementById("problem7").innerHTML = `Second at 8h = 8 * 60 * 60 = ${hoursTo_Seconds(8)} sec`;

// 8- Given four numbers, return true if the sum of both numbers is more than 350. Otherwise return false.
function more_350(num1,num2,num3,num4) {
    const total = num1+num2+num3+num4;
    if (total > 350) {
        return total + " ( True )";
    } else {
        return total + " ( False )";
    }
}
document.getElementById("problem8").innerHTML = `Numbers : 100 + 50 + 60 + 150 = ${more_350(100,50,60,150)}`;

