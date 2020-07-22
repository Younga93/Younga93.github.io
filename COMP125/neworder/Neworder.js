//Younga Jin #301055699 COMP125

// function to add values of selected check boxes and display total
function calcTotal() {
    var itemTotal = 0;
    var tax = 0;
    var totalWithTax = 0;
    var items = document.getElementsByTagName("input");
    var cells = document.getElementsByTagName("td");
    for (var i = 0; i < 5; i++) {
       if (items[i].checked) {
          itemTotal += (items[i].value * 1);
       }
    }
    tax = itemTotal * 0.05;
    totalWithTax = itemTotal + tax;
    cells[1].innerHTML = (itemTotal / 100).toFixed(2);
    cells[3].innerHTML = (tax / 100).toFixed(2);
    cells[5].innerHTML = "$" + (totalWithTax / 100).toFixed(2);
 }
 
 // add event listener to Submit button
 var submitButton = document.getElementById("sButton");
 if (submitButton.addEventListener) {
   submitButton.addEventListener("click", calcTotal, false); 
 } else if (submitButton.attachEvent)  {
   submitButton.attachEvent("onclick", calcTotal);
 }