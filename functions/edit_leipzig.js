// Create function to redirect onclick
function home_leipzig() {
    // Redirecting to index Page
    window.location = "leipzig.html"; 
}

// ######################################################################################################################

// ÜBER LEIPZIG
// submit_about_leipzig() is declared in edit_leipzig.html
function submit_about_leipzig() {
    var about_leipzig = document.getElementById("edit_about_leipzig").value;
    localStorage.setItem("about_leipzig", about_leipzig); // Safe input in local Storage
    return false;
}

// FÜR WOHNUNG
// submit_for_room() is declared in edit_leipzig.html
function submit_for_room() {
    var for_room = document.getElementById("edit_for_room").value;
    localStorage.setItem("for_room", for_room); // Safe input in local Storage
    return false;
}

// FÜR UNSER LEBEN
// submit_our_life() is declared in edit_leipzig.html
function submit_our_life() {
    var our_life = document.getElementById("edit_our_life").value;
    localStorage.setItem("our_life", our_life); // Safe input in local Storage
    return false;
}