// Create function to count PingPong Score
// submit_sunday() is declared in m_edit.html
function submit_score() {
    var pingpong_score = document.getElementById("alltime_pingpong_score").value; // <input id="alltime_pingpong_score">
    localStorage.setItem("pingpong_score", pingpong_score); // Safe input in local Storage
    return false;
}