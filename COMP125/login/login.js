function check() {
    var expiresDate = new Date();
    var username = document.getElementById("txtUsername").value;
    var email = document.getElementById("txtEmail").value;

    expiresDate.setDate(expiresDate.getDate() - 7);
    document.cookie = "username=" + username +"; email=" + email + "; expires=" + expiresDate.toUTCString();
    //alert(document.cookie);

    document.cookie = "username=" + encodeURIComponent(username);
    document.cookie = "email=" + encodeURIComponent(email);
    document.cookie = "expires=" + expiresDate.toUTCString();
    var cookieString = decodeURIComponent(document.cookie);
    var cookieArray = cookieString.split("; ");
    //console.log(cookieArray);
}
document.getElementById("btnLogin").addEventListener("click", check, false);
