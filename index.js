//Scores
let homePoints = 0
let guestPoints = 0

function addPoint(team, points) {
    if(team==="home") {
        homePoints += points;
        document.getElementById("home-score").textContent = homePoints;
    }
    else if(team==="guest") {
        guestPoints += points;
        document.getElementById("guest-score").textContent = guestPoints;
    }
}

//Period
let periodCount = 0

function addPeriod() {
    if (periodCount < 4) {
        periodCount += 1;
        document.getElementById("period-number").textContent = periodCount;
    }
    else if( periodCount < 5) {
        periodCount = 0;
        document.getElementById("period-number").textContent = periodCount;
    }
}

//Fouls
let homeFouls = 0
let guestFouls = 0

function addFouls(team, fouls) {
    if (team === "home" && fouls===1) {
        homeFouls += fouls;
        document.getElementById("foul-home").textContent = homeFouls;
    }
    else if (team === "home" && fouls===0) {
        homeFouls = 0;
        document.getElementById("foul-home").textContent = homeFouls;
    }
    else if (team === "guest" && fouls===1) {
        guestFouls += fouls;
        document.getElementById("foul-guest").textContent = guestFouls;
    }
    else if (team === "guest" && fouls===0) {
        guestFouls = 0;    
        document.getElementById("foul-guest").textContent = guestFouls;
    }
}

//New Game Button

function newGame() {
    document.getElementById("home-score").textContent = 0
    document.getElementById("guest-score").textContent = 0
    document.getElementById("period-number").textContent = 0
    document.getElementById("foul-home").textContent = 0
    document.getElementById("foul-guest").textContent = 0
    homePoints = 0
    guestPoints = 0
    periodCount = 0
    homeFouls = 0
    guestFouls = 0
}