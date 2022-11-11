// ROUTING

// Create function to redirect onclick
function home_janis() {
    // Redirecting to j_landing Page
    window.location = "j_landing.html"; 
}

// Create function to redirect onclick
function travel() {
    // Redirecting to m_landing Page
    window.location = "t_travel.html"; 
}

// ######################################################################################################################

// FOR YOU MIRI
// submit_for_miri() is declared in j_edit.html
function submit_for_miri() {
    var for_you_miri = document.getElementById("for_miri").value; // in j_edit.html: <input id="for_miri">
    localStorage.setItem("for_you_miri", for_you_miri); // Safe input in local Storage
    window.alert("✅ MIA: 'DEINE NACHRICHT WURDE GESENDET!' ✅")
    return false;
}

// MONTAG
// submit_monday() is declared in j_edit.html
function submit_monday() {
    var monday_for_miri = document.getElementById("monday_miri").value; // <input id="monday_miri">
    localStorage.setItem("monday_for_miri", monday_for_miri); // Safe input in local Storage
    window.alert("✅ MIA: 'DEINE NACHRICHT WURDE GESENDET!' ✅")
    return false;
}

// DIENSTAG
// submit_tuesday() is declared in j_edit.html
function submit_tuesday() {
    var tuesday_for_miri = document.getElementById("tuesday_miri").value; // <input id="tuesday_miri">
    localStorage.setItem("tuesday_for_miri", tuesday_for_miri); // Safe input in local Storage
    window.alert("✅ MIA: 'DEINE NACHRICHT WURDE GESENDET!' ✅")
    return false;
}

// MITTWOCH
// submit_wednesday() is declared in j_edit.html
function submit_wednesday() {
    var wednesday_for_miri = document.getElementById("wednesday_miri").value; // <input id="wednesday_miri">
    localStorage.setItem("wednesday_for_miri", wednesday_for_miri); // Safe input in local Storage
    window.alert("✅ MIA: 'DEINE NACHRICHT WURDE GESENDET!' ✅")
    return false;
}

// DONNERSTAG
// submit_thursday() is declared in j_edit.html
function submit_thursday() {
    var thursday_for_miri = document.getElementById("thursday_miri").value; // <input id="thursday_miri">
    localStorage.setItem("thursday_for_miri", thursday_for_miri); // Safe input in local Storage
    window.alert("✅ MIA: 'DEINE NACHRICHT WURDE GESENDET!' ✅")
    return false;
}

// FREITAG
// submit_friday() is declared in j_edit.html
function submit_friday() {
    var friday_for_miri = document.getElementById("friday_miri").value; // <input id="friday_miri">
    localStorage.setItem("friday_for_miri", friday_for_miri); // Safe input in local Storage
    window.alert("✅ MIA: 'DEINE NACHRICHT WURDE GESENDET!' ✅")
    return false;
}

// SAMSTAG
// submit_saturday() is declared in j_edit.html
function submit_saturday() {
    var saturday_for_miri = document.getElementById("saturday_miri").value; // <input id="saturday_miri">
    localStorage.setItem("saturday_for_miri", saturday_for_miri); // Safe input in local Storage
    window.alert("✅ MIA: 'DEINE NACHRICHT WURDE GESENDET!' ✅")
    return false;
}

// SONNTAG
// submit_sunday() is declared in j_edit.html
function submit_sunday() {
    var sunday_for_miri = document.getElementById("sunday_miri").value; // <input id="sunday_miri">
    localStorage.setItem("sunday_for_miri", sunday_for_miri); // Safe input in local Storage
    window.alert("✅ MIA: 'DEINE NACHRICHT WURDE GESENDET!' ✅")
    return false;
}

// #####################################################################################################################################

// FAVORITE SONG
// submit_song() is declared in m_edit.html
function submit_song() {
    var song_for_miri = document.getElementById("song_miri").value; // <input id="song_miri">
    localStorage.setItem("song_for_miri", song_for_miri); // Safe input in local Storage
    window.alert("✅ MIA: 'DEINE NACHRICHT WURDE GESENDET!' ✅")
    return false;
}