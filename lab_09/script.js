const cards = [
    '🎃', '🎃',  '🥵', '🥵',  '❤️‍🔥', '❤️‍🔥',  '🫥', '🫥',   '😶‍🌫️', '😶‍🌫️',  '🫠', '🫠'
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let stepCount = 0;


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {               // перемішка
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function createBoard() {
    const gameBoard = document.querySelector('.grid'); // дошка
    gameBoard.innerHTML = ''; // очист.дошк
    const pairCount = 6; 

    
    const selectedCards = cards.slice(0, pairCount * 2);
    shuffle(selectedCards);

    selectedCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.icon = card;
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}


function flipCard() {
    if (lockBoard) return; //блок.дошки 
    if (this === firstCard) return; // без змін, та сама 

    this.classList.add('flipped');
    this.textContent = this.dataset.icon; // вивід св

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}


function checkForMatch() {
    stepCount++;
    document.getElementById('step-counter').textContent = `Кроки: ${stepCount}`;       //перевірка на збіг

    if (firstCard.dataset.icon === secondCard.dataset.icon) {
        disableCards();
    } else {
        unflipCards();
    }
}


function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard); // видалення
    resetBoard();
}


function unflipCards() {
    lockBoard = true;              //назад
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        firstCard.textContent = '';
        secondCard.textContent = '';
        resetBoard();
    }, 1000); // затримка
}


function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false]; // очист
}


document.getElementById('reset-button').addEventListener('click', () => {
    createBoard();
    stepCount = 0;
    document.getElementById('step-counter').textContent = `Кроки: ${stepCount}`;
});


createBoard();
