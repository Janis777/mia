// Create Login Array
var username = ["miri", "janis"];
var password = ["astrid", "justus"];

// Create function to check Logindata from User
function check_login() {

    // Get Username and Userpassword
    var user = document.getElementById("name").value;
    var user_password = document.getElementById("password").value;

    // Check if Username and Userpassword are in Arrays of 'username' and 'password'
    var checkuser = username.includes(user);
    var checkpassword = password.includes(user_password);

    // Check if Inputs are in Arrays
    // IF Userinput is in 'username'
    if (checkuser = true) {
        console.log("####### ✔ USERNAME IS VALID #######");
        // Redirecting to index Page
        window.location = "index.html"; 
    // IF Userinput is in 'password'
    } else if (checkpassword = true) {
        console.log("####### ✔ PASSWORD IS VALID #######");
    } else {
        console.log("####### ❌ USERNAME AND/OR PASSWORD ARE INVALID #######");
        alert("Ups! Deine Logindaten sind leider falsch... 😕");
    }
}