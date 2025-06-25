const cards = document.querySelectorAll('.memory-card');
const resetBtn = document.getElementById('resetBtn');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

let matchCounter = 0;
const totalPairs = cards.length / 2;

function flipCard() {
    if (lockBoard || this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.dataset.fruit === secondCard.dataset.fruit;

    if (isMatch) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    matchCounter++;

    if (matchCounter === totalPairs) {
        setTimeout(() => {
            alert('🎉 Victory!');
        }, 500);
    }

    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 600);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Shuffle on start
(function shuffle() {
    cards.forEach(card => {
        card.style.order = Math.floor(Math.random() * cards.length);
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

resetBtn.addEventListener('click', () => {
    location.reload();
});
