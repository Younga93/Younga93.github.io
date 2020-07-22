//Younga Jin #301055699 COMP125



"use strict";
var formValidity = true;
var errorDiv = document.getElementById("errorText");


//validate mandatory fields.
function validateMandatory(){
    var inputElements = document.querySelectorAll("input");
    var elementCount = inputElements.length;
    var mandatoryValidity = true;
    var currentElement;

    try{
        for (var i=0; i< elementCount; i++){
            //validate all input elements in fieldset
            currentElement = inputElements[i];
            if(currentElement.value === ""){
                currentElement.style.background = "rgb(255,233,233)";
                mandatoryValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }
        if (mandatoryValidity === false){
            throw "Please complete all fields.";
        }
    }
    catch(msg){
        errorDiv.style.display="block";
        errorDiv.innerHTML += msg;
        formValidity=false;
    }
}

//validate postal code
function validatePostalCode(){
    var postcodeValidity = true;
    var currentPostCode = document.getElementById("postCode");
    var postCode = /^\s*[a-ceghj-npr-tvxy]\d[a-ceghj-npr-tv-z](\s)?\d[a-ceghj-npr-tv-z]\d\s*$/i;
    
    try{
        if(postCode.test(currentPostCode.value)){
            currentPostCode.style.background = "white";
        } else {
            currentPostCode.style.background = "rgb(255,233,233)";
            postcodeValidity = false;
        }
        if (postcodeValidity === false && currentPostCode.value !== "") {
            throw "<br> Postal Code format is invalid. (e.g. A0A0A0)";
        }
    }
    catch(msg){
        errorDiv.style.display="block";
        errorDiv.innerHTML += msg;
        formValidity=false;
    }
}

//validate province
function validateProvince(){
    var currentProvince = document.getElementById("province");
    var province = ["QC", "ON", "MN", "SK", "AB", "BC"];

    try{
        if(currentProvince.value !== ""){
            var properProvince = false;
            for(var i=0; i<province.length; i++){
                if(province[i] === currentProvince.value.toUpperCase()){
                    properProvince = true;
                }
            }
            if(properProvince === false){
                currentProvince.style.background = "rgb(255,233,233)";
                throw "<br>Province must be one of QC, ON, MN, SK, AB, BC.";
            }
        }
    }
    catch(msg){
        errorDiv.style.display="block";
        errorDiv.innerHTML += msg;
        formValidity=false;
    }
}

//validate age
function validateAge(){
    var currentAge = document.getElementById("age");
    var properAge = 18;

    try{
        if(currentAge.value < properAge && currentAge.value !== ""){
            currentAge.style.background = "rgb(255,233,233)";
            throw "<br>Age has to be at least 18 years old.";
        } else if (isNaN(currentAge.value)){
            currentAge.style.background = "rgb(255,233,233)";
            throw "<br>Enter number for age field.";
        }
    }
    catch(msg){
        errorDiv.style.display="block";
        errorDiv.innerHTML += msg;
        formValidity=false;
    }
}

//validate email
function validateEmail(){
    var currentEmail = document.getElementById("email");
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    try{
        if(email.test(currentEmail.value)){
            currentEmail.style.background = "white";
        } else if(currentEmail.value !== ""){
                currentEmail.style.background = "rgb(255,233,233)";
                throw "<br>Email must contain @ and . (e.g. centennial@college.ca)";
        }
    }
    catch(msg){
        errorDiv.style.display="block";
        errorDiv.innerHTML += msg;
        formValidity=false;
    }
}

//validate password
function validatePassword(){
    var currentPassword = document.getElementById("password");
    var passwordConfirm = document.getElementById("confirm");

    try{
        if(currentPassword.value == "" && passwordConfirm.value == ""){
        } else if (/.{6,}/.test(currentPassword.value) === false) {
            throw "<br>Password must be at least 8 characters";
        } else if (currentPassword.value.localeCompare(passwordConfirm.value) !== 0) {
            throw "<br>Passwords must match";
        } else if (/[a-z]/.test(currentPassword.value) === false) {
            throw "<br>Password must contain at least one lowercase letter";
        } else if (/[A-Z]/.test(currentPassword.value) === false) {
            throw "<br>Password must contain at least one uppercase letter";
        } else if (/\d/.test(currentPassword.value) === false) {
            throw "<br>Password must contain at least one number";
        } else if (/[!@#$%^&*]/.test(currentPassword.value) === false) {
            throw "<br>Password must contain at least one of special characters. (!@#$%^&*)";
        } else {
            currentPassword.style.background = "white";
        }
    }
    catch(msg){
        currentPassword.style.background = "rgb(255,233,233)";
        passwordConfirm.style.background = "rgb(255,233,233)";
        errorDiv.style.display="block";
        errorDiv.innerHTML += msg;
        formValidity=false;
    }
}

// validate form
function validateForm(evt){
    if(evt.preventDefault){
        evt.preventDefault();
    }else{
        evt.returnValue = false;
    }
    formValidity = true;
    
    errorDiv.style.display = "none";
    errorDiv.innerHTML = "";
    validateMandatory();
    validatePostalCode();
    validateProvince();
    validateAge();
    validateEmail();
    validatePassword();
    if(formValidity === true){
        createProfile();
        //document.getElementsByTagName("form")[0].submit();
    }
}

//
function createProfile(){
    var profile = {};
    profile.username = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
    document.getElementById("profileUsername").innerHTML = profile.username;

    document.getElementById("usernameSection").style.display = "block";

    profile.Address = document.getElementById("address").value;
    document.getElementById("profileAddress").innerHTML = profile.Address;
    document.getElementById("addressSection").style.display = "block";

    profile.city = document.getElementById("city").value;
    document.getElementById("profileCity").innerHTML = profile.city;
    document.getElementById("citySection").style.display = "block";

    profile.postCode = document.getElementById("postCode").value;
    document.getElementById("profilePostcode").innerHTML = profile.postCode;
    document.getElementById("postcodeSection").style.display = "block";
    
    profile.province = document.getElementById("province").value;
    document.getElementById("profileProvince").innerHTML = profile.province;
    document.getElementById("provinceSection").style.display = "block";
    
    profile.age = document.getElementById("age").value;
    document.getElementById("profileAge").innerHTML = profile.age;
    document.getElementById("ageSection").style.display = "block";

    profile.email = document.getElementById("email").value.toLowerCase();
    document.getElementById("profileEmail").innerHTML = profile.email;
    document.getElementById("emailSection").style.display = "block";

    document.getElementById("profile").style.display = "block";
}

//clear profile
function clearAll(){
    document.getElementById("profileUsername").innerHTML = "<br>";
    document.getElementById("profileAddress").innerHTML = "<br>";
    document.getElementById("profileCity").innerHTML = "<br>";
    document.getElementById("profilePostcode").innerHTML = "<br>";
    document.getElementById("profileProvince").innerHTML = "<br>";
    document.getElementById("profileAge").innerHTML = "<br>";
    document.getElementById("profileEmail").innerHTML = "<br>";

    document.getElementById("errorText").value = "";
    document.getElementById("firstName").value =  "";
    document.getElementById("lastName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("city").value = "";
    document.getElementById("postCode").value = "";
    document.getElementById("province").value = "";
    document.getElementById("age").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm").value = "";
    document.getElementById("email").value = "";
}

// create event listeners
function createEventListeners(){
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener){
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent){
        form.attachEvent("onsubmit",validateForm);
    }

    var clear = document.getElementById("clearBtn");
    if (clear.addEventListener){
        clear.addEventListener("click",clearAll, false);
    } else if (clear.attachEvent){
        clear.attachEvent("onclick",clearAll);
    }
}

// run setup function when page finishes loading
if (window.addEventListener){
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent){
    window.attachEvent("onload",createEventListeners);
}