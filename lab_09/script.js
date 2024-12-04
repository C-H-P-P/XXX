const symbols = ['🎃', '🥵', '❤️‍🔥', '🫥', '😶‍🌫️', '🫠'];
let shuffledCards = [...symbols, ...symbols].sort(() => Math.random() - 0.5);

const board = document.getElementById('grid');
let CardOne = null;
let pairsMatched = 0;

function card() {
    shuffledCards.forEach((symbol) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', 'hidden');
        cardElement.dataset.symbol = symbol;
        cardElement.addEventListener('click', revealCard);
        board.appendChild(cardElement);
    });
}

function revealCard() {
    if (this === CardOne  || this.classList.contains('revealed')) return;

    this.classList.remove('hidden');
    this.classList.add('revealed');
    this.textContent = this.dataset.symbol;

    if (!CardOne ) {
        CardOne  = this;
    } else {
        evaluateMatch(this);
    }
}

function evaluateMatch(secondFlippedCard) {
    if (CardOne .dataset.symbol === secondFlippedCard.dataset.symbol) {
        pairsMatched += 2;
        if (pairsMatched === shuffledCards.length) {
            setTimeout(() => alert('Win!'), 500);
        }
        CardOne  = null;
    } else {
        setTimeout(() => {
            CardOne .classList.add('hidden');
            secondFlippedCard.classList.add('hidden');
            CardOne .textContent = '';
            secondFlippedCard.textContent = '';
            CardOne .classList.remove('revealed');
            secondFlippedCard.classList.remove('revealed');
            CardOne  = null;
        }, 1000);
    }
}

card();