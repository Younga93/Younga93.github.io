//Younga Jin #301055699 COMP125 - Assignment2

var daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
var orderedFood = ["Potato chips", "Chicken rice", "Poutine", "Tacos",
    "French toast", "Hummus", "Chili crab", "Fish 'n' chips", "Pho",
    "Butter crab", "Lasagna", "Pierogi", "Donuts", "Bibimbap",
    "Hamburger", "Sushi", "Chicken curry", "Poutine", "Pineapple pizza",
    "Lasagna", "Basil Soup", "Hamburger", "Chicken Salad",
    "Bulgogi", "Broccoli Soup", "Lasagna", "Sushi", "Beef curry",
    "Pierogi", "Bulgogi", "Poutine"];
var customerNames = ["Mary", "Patricia", "Jennifer", "Elizabeth",
    "Linda", "Barbara", "Susan", "Margaret", "Jessica",
    "Sarah", "Emma", "June", "Anne", "May",
    "April", "Jane", "Olivia", "Sophia", "Isabella",
    "Ava", "Mia", "Emily", "Abigail",
    "Madison", "Charlotte", "Lily", "Megan", "Morgan",
    "Samantha", "Tracy", "Lauren"];
var eatInOptions = ["Take-away", "Take-away", "Eat-in", "Take-away",
    "Eat-in", "Eat-in", "Take-away", "Eat-in", "Eat-in",
    "Eat-in", "Eat-in", "Take-away", "Eat-in", "Take-away",
    "Eat-in", "Take-away", "Eat-in", "Take-away", "Eat-in",
    "Take-away", "Take-away", "Take-away", "Eat-in",
    "Take-away", "Eat-in", "Eat-in", "Eat-in", "Eat-in",
    "Take-away", "Eat-in", "Eat-in"];

//function to place dayOfWeek values on table header.
function addDaysOfWeek() {
    for (var i = 0; i < 7; i++) {
        document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];
    }
}

function addCalendarDates() {
    var i = 1;
    var paragraphs = "";
    while (i <= 31) {
        var cells = document.getElementById("day" + i);
        paragraphs = cells.getElementsByTagName("p");
        paragraphs[0].innerHTML = i;
        i++;
    }
}

function addOrderInfo() {
    var paragraphs = "";
    for (var i = 1; i <= 31; i++) {
        var cells = document.getElementById("day" + i);
        paragraphs = cells.getElementsByTagName("p");
        paragraphs[1].innerHTML = orderedFood[i - 1];
        paragraphs[2].innerHTML = eatInOptions[i - 1]
            + "<br>(" + customerNames[i - 1] + ")";
    }
}

//fucntion to populate calendar
function setUpPage() {
    addDaysOfWeek();
    addCalendarDates();
    addOrderInfo();
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}


//Choosing Month
//function chooseMonth() {
//    var monthsList = document.getElementById("lstMonths");
//    var selectedMonth = monthsList.options[monthsList.selectedIndex].value;
//}
//document.getElementById("lstMonths").addEventListener("change", chooseMonth, false);
