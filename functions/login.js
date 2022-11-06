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
        } else {
            console.log("####### ❌ INVALID USERNAME OR PASSWORD #######");
        }
    }
}