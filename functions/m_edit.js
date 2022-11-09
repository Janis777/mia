// Create function to redirect onclick
function home_janis() {
    // Redirecting to m_landing Page
    window.location = "j_landing.html"; 
}

// ######################################################################################################################

// Create function to redirect onclick
function travel() {
    // Redirecting to m_landing Page
    window.location = "t_travel.html"; 
}

// ######################################################################################################################

// Create function to redirect onclick
function home() {
    // Redirecting to m_landing Page
    window.location = "m_landing.html"; 
}

// FOR YOU
// submit_foru() is declared in m_edit.html
function submit_foru() {
    var for_you_janis = document.getElementById("for_janis").value; // <input id="for_janis">
    localStorage.setItem("for_you_janis", for_you_janis); // Safe input in local Storage
    return false;
}

// MONTAG
// submit_monday() is declared in m_edit.html
function submit_monday() {
    var monday_for_janis = document.getElementById("monday_janis").value; // <input id="monday_janis">
    localStorage.setItem("monday_for_janis", monday_for_janis); // Safe input in local Storage
    return false;
}

// DIENSTAG
// submit_tuesday() is declared in m_edit.html
function submit_tuesday() {
    var tuesday_for_janis = document.getElementById("tuesday_janis").value; // <input id="tuesday_janis">
    localStorage.setItem("tuesday_for_janis", tuesday_for_janis); // Safe input in local Storage
    return false;
}

// MITTWOCH
// submit_wednesday() is declared in m_edit.html
function submit_wednesday() {
    var wednesday_for_janis = document.getElementById("wednesday_janis").value; // <input id="wednesday_janis">
    localStorage.setItem("wednesday_for_janis", wednesday_for_janis); // Safe input in local Storage
    return false;
}

// -------------------------------------

// DONNERSTAG
// submit_thursday() is declared in m_edit.html
function submit_thursday() {
    var thursday_for_janis = document.getElementById("thursday_janis").value; // <input id="thursday_janis">
    localStorage.setItem("thursday_for_janis", thursday_for_janis); // Safe input in local Storage
    return false;
}

// FREITAG
// submit_friday() is declared in m_edit.html
function submit_friday() {
    var friday_for_janis = document.getElementById("friday_janis").value; // <input id="friday_janis">
    localStorage.setItem("friday_for_janis", friday_for_janis); // Safe input in local Storage
    return false;
}

// SAMSTAG
// submit_saturday() is declared in m_edit.html
function submit_saturday() {
    var saturday_for_janis = document.getElementById("saturday_janis").value; // <input id="saturday_janis">
    localStorage.setItem("saturday_for_janis", saturday_for_janis); // Safe input in local Storage
    return false;
}

// SONNTAG
// submit_sunday() is declared in m_edit.html
function submit_sunday() {
    var sunday_for_janis = document.getElementById("sunday_janis").value; // <input id="sunday_janis">
    localStorage.setItem("sunday_for_janis", sunday_for_janis); // Safe input in local Storage
    return false;
}