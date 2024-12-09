const pr = {
    kravchuk: {
        name: "Kravchuk",
        details: {
            "загальне": "Леоні́д Мака́рович Кравчу́к",
            "Далі": "Український політик, державний діяч",
            "додаткова-інфа": "Перший Президент України",
            "Ще": "Герой України"
        }
    },
    kuchma: {
        name: "Kuchma",
        details: {
            "загальне": "Леоні́д Дани́лович Ку́чма",
            "Далі": "Український політик, державний діяч",
            "додаткова-інфа": "Другий Президент України",
            "Ще": "Автор багатьох реформ"
        }
    },
    yushchenko: {
        name: "Yushchenko",
        details: {
            "загальне": "Ві́ктор Андрі́йович Ю́щенко",
            "Далі": "Український політик, державний діяч",
            "додаткова-інфа": "Третій Президент України",
            "Ще": "Борець за демократію"
        }
    },
  
};

function showprInfo(prId) {
    const prezedent = document.getElementById("prezedent");
    const prContent = document.getElementById("PP");
    const prData = pr[prId];

    if (prData) {
        prContent.innerHTML = `
            <h2>${prData.name}</h2>
            <img src="${prData.image}" alt="${prData.name}">
            <p><strong>Загальне:</strong> ${prData.details["загальне"]}</p>
            <p><strong>Далі:</strong> ${prData.details["Далі"]}</p>
            <p><strong>Додаткова інфа:</strong> ${prData.details["додаткова-інфа"]}</p>
            <p><strong>Ще:</strong> ${prData.details["Ще"]}</p>
        `;
        prezedent.style.display = "flex";
        window.location.hash = `#${prId}`;
    } else {
        console.error(`Дані для PD ID '${prId}' не знайдено`);
    }
}

function closeprInfo() {
    const prezedent = document.getElementById("prezedent");
    prezedent.style.display = "none";
    window.location.hash = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash.replace("#", "");
    if (hash && pr[hash]) {
        showprInfo(hash);
    }

    const prezedent = document.getElementById("prezedent");
    prezedent.addEventListener("click", (event) => {
        if (event.target === prezedent) closeprInfo();
    });
});
