// Create Login Object
var Users = [
    {
        username: "miriam",
        password: "justus"
    },
    {
        username: "janis",
        password: "astrid"
    }
]

function check_login() {
    var username = document.getElementById("name").value
    var password = document.getElementById("password").value

    for (i = 0; i < Users.length; i++) {
        if (username == Users[i].username && password == Users[i].password) {
            console.log("####### ✔ USERNAME IS VALID #######");
            console.log("####### ✔ PASSWORD IS VALID #######");
            console.log("####### 👥 LOGGED IN AS: " + username + " #######");
            // Redirecting to index Page
            window.location = "index.html";
            return false;
        } else {
            console.log("####### ❌ INVALID USERNAME OR PASSWORD #######");
            // Refresh login Page
            window.location = "login.html";
            /* window.alert("❌ Ups! Leider sind deine Daten falsch... ") */
        }
    }
}