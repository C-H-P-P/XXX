function showInfo(team) { 
    const infoBox = document.getElementById('info-box'); 
    const infoText = document.getElementById('info-text'); 
    console.log(team);

    const teamInfo = {
        "kravchuk": "КРАВЧУК----------1 президент",
        "kuchma": "КУЧМА----------2 президент",
        "uchenko": "Віктор Ющенко----------3 президент",
        "yanik": "Віктор Янукович----------4 президент",
        "poroshenko": "Петро Порошенко----------5 президент",
        "zelenskiu": "Володимир Зеленський----------6 президент"
    };

    infoText.textContent = teamInfo[team]; 
    infoBox.style.display = 'block'; 
} 

function hideInfo() { 
    document.getElementById('info-box').style.display = 'none'; 
}
