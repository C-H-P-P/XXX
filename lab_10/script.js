function showInfo(team) { 
    const infoBox = document.getElementById('info-box'); 
    const infoText = document.getElementById('info-text'); 
    console.log(team);

    const teamInfo = {
        "kravchuk": "КРАВЧУК----------1 президент. Детальніше на <a href='https://lb.ua/file/person/1407_kravchuk_leonid_makarovich.html' target='_blank'>посиланні</a>.",
        "kuchma": "КУЧМА----------2 президент. Детальніше на <a href='https://uk.wikipedia.org/wiki/%D0%9A%D1%83%D1%87%D0%BC%D0%B0_%D0%9B%D0%B5%D0%BE%D0%BD%D1%96%D0%B4_%D0%94%D0%B0%D0%BD%D0%B8%D0%BB%D0%BE%D0%B2%D0%B8%D1%87' target='_blank'>посиланні</a>.",
        "uchenko": "Віктор Ющенко----------3 президент. Детальніше на <a href='https://uk.wikipedia.org/wiki/%D0%AE%D1%89%D0%B5%D0%BD%D0%BA%D0%BE_%D0%92%D1%96%D0%BA%D1%82%D0%BE%D1%80_%D0%90%D0%BD%D0%B4%D1%80%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87' target='_blank'>посиланні</a>.",
        "yanik": "Віктор Янукович----------4 президент. Детальніше на <a href='https://uk.wikipedia.org/wiki/%D0%AF%D0%BD%D1%83%D0%BA%D0%BE%D0%B2%D0%B8%D1%87_%D0%92%D1%96%D0%BA%D1%82%D0%BE%D1%80_%D0%A4%D0%B5%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87' target='_blank'>посиланні</a>.",
        "poroshenko": "Петро Порошенко----------5 президент. Детальніше на <a href='https://uk.wikipedia.org/wiki/%D0%9F%D0%BE%D1%80%D0%BE%D1%88%D0%B5%D0%BD%D0%BA%D0%BE_%D0%9F%D0%B5%D1%82%D1%80%D0%BE_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87' target='_blank'>посиланні</a>.",
        "zelenskiu": "Володимир Зеленський----------6 президент. Детальніше на <a href='https://uk.wikipedia.org/wiki/%D0%97%D0%B5%D0%BB%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%B8%D1%87' target='_blank'>посиланні</a>."
    };

    infoText.innerHTML = teamInfo[team]; 
    infoBox.style.display = 'block'; 
} 

function hideInfo() { 
    document.getElementById('info-box').style.display = 'none'; 
} 
