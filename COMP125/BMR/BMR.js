function calBMR() {
    var BMR;
    var dailyCalcories;
    var genderLists = document.getElementById("lstGenders");
    var gender = genderLists.options[genderLists.selectedIndex].value; //"Female" or "Male"
    var age = document.getElementById("txtAge");    //age.value
    var height;
    var weight;
    var lifestyle1 = document.getElementById("optSedentary");
    var lifestyle2 = document.getElementById("optLightly");
    var lifestyle3 = document.getElementById("optModerately");
    var lifestyle4 = document.getElementById("optVery");
    var lifestyle5 = document.getElementById("optSuper");
    var energyExpenditure;
    if (lifestyle1.checked) {
        energyExpenditure = 1.53;
    } else if (lifestyle2.checked) {
        energyExpenditure = 1.53;
    } else if (lifestyle3.checked) {
        energyExpenditure = 1.76;
    } else if (lifestyle4.checked) {
        energyExpenditure = 1.76;
    } else if (lifestyle5.checked) {
        energyExpenditure = 2.25;
    } else {
        energyExpenditure = null;
    }
    var cm, kg, ft, ins, lbs;
    if (unit == "Metric") {
        cm = document.getElementById("txtCM");
        kg = document.getElementById("txtKG");
        height = cm.value;
        weight = kg.value;  //weight.value
    }
    else if (unit == "Imperial") {
        ft = document.getElementById("txtFeet");
        ins = document.getElementById("txtInches");
        lbs = document.getElementById("txtPounds");
        height = ft.value * 30.48 + ins.value * 2.54;
        weight = lbs.value * 0.45359;
    }

    //Women	BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
    //Men	BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
    (gender == "Female") ?
        (BMR = Math.round((10 * weight) + (6.25 * height) - (5 * age.value) - 161))
        : (BMR = Math.round((10 * weight) + (6.25 * height) - (5 * age.value) + 5));
    dailyCalcories = Math.round(BMR * energyExpenditure);

    if (unit == "Metric"
        && age.value >= 1 && age.value <= 150
        && cm.value >= 1 && cm.value <= 300
        && kg.value >= 1 && kg.value <= 300
        && energyExpenditure != null) {
        document.getElementById("txtBMR").innerHTML = "<label>Gender&nbsp;</label>:" + gender
            + "<br><label>Age&nbsp;</label>:" + age.value
            + "<br><label>Height&nbsp;</label>:" + cm.value
            + " cm<br><label>Weight&nbsp;</label>:" + kg.value
            + " kg<br><label>BMR&nbsp;</label>:" + BMR
            + "<br><label>&nbsp;</label>" + dailyCalcories + " calories recommended for daily intake.";
    } else if (unit == "Imperial"
        && age.value >= 1 && age.value <= 150
        && ft.value >= 1 && ft.value <= 10
        && ins.value >= 1 && ins.value <= 12
        && lbs.value >= 1 && lbs.value <= 700
        && energyExpenditure != null) {
        document.getElementById("txtBMR").innerHTML = "<label>Gender </label>:" + gender
            + "<br><label>Age&nbsp;</label>:" + age.value
            + "<br><label>Height </label>:" + ft.value + " feet " + ins.value
            + " inches<br><label>Weight&nbsp;</label>:" + lbs.value
            + " pounds<br><label>BMR&nbsp;</label>:" + BMR
            + "<br><label>&nbsp;</label>" + dailyCalcories + " calories recommended for daily intake.";
    }
}
document.getElementById("btnCalculate").addEventListener("click", calBMR, false);

var unit="Metric";
function displayMetricUnit() {
    unit = "Metric";
    var unitMetric = '<label> Height&nbsp;</label> <input name="txtCM" id="txtCM" type="number" min="1" max="300" required/> cm<br />'
        + '<label>Weight&nbsp;</label><input name="txtKG" id="txtKG" type="number" min="1" max="300" required/> kg<br/>';

    document.getElementById("displayUnits").innerHTML = unitMetric;
}
function displayImperialUnit() {
    unit = "Imperial";
    var unitImperial = '<label> Height&nbsp;</label><input name="txtFeet" id="txtFeet" type="number" min="1" max="10" required/> feet<br />'
        + '<label>&nbsp;</label><input name="txtInches" id="txtInches" type="number" min="1" max="12" required/> inches<br />'
        + '<label>Weight&nbsp;</label><input name="txtPounds" id="txtPounds" type="number" min="1" max="700" required/> pounds<br/>';

    document.getElementById("displayUnits").innerHTML = unitImperial;
}

document.getElementById("btnMetric").addEventListener("click", displayMetricUnit, false);
document.getElementById("btnImperial").addEventListener("click", displayImperialUnit, false);