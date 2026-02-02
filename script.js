let images = [];
let index = 0;
let liked = [];

const TOTAL = 15;

async function loadCats() {
    for (let i = 0; i < TOTAL; i++) {
        images.push(`https://cataas.com/cat?random=${Math.random()}`);
    }
    showImage();
}

function showImage() {
    if (index < images.length) {
        document.getElementById("catImage").src = images[index];
        document.getElementById("counter").innerText =
            `Cat ${index + 1} of ${TOTAL}`;
    } else {
        showResult();
    }
}

function like() {
    liked.push(images[index]);
    index++;
    resetCard();
    showImage();
}

function dislike() {
    index++;
    resetCard();
    showImage();
}

function showResult() {
    document.getElementById("card-container").style.display = "none";
    document.querySelector(".buttons").style.display = "none";

    let resultDiv = document.getElementById("result");
    resultDiv.classList.remove("hidden");

    let html = `<h3>You liked ${liked.length} cats! 😺</h3>`;
    html += `<div class="result-images">`;

    liked.forEach(img => {
        html += `<img src="${img}" />`;
    });

    html += `</div>`;
    html += `<br><button onclick="restart()">Try Again</button>`;

    resultDiv.innerHTML = html;
}

function restart() {
    index = 0;
    liked = [];
    document.getElementById("card-container").style.display = "block";
    document.querySelector(".buttons").style.display = "block";
    document.getElementById("result").classList.add("hidden");
    showImage();
}

/* Swipe Gesture Logic */

let card = document.getElementById("card");
let startX = 0;

card.addEventListener("touchstart", startSwipe);
card.addEventListener("touchmove", moveSwipe);
card.addEventListener("touchend", endSwipe);

function startSwipe(e) {
    startX = e.touches[0].clientX;
}

function moveSwipe(e) {
    let moveX = e.touches[0].clientX;
    let diff = moveX - startX;

    card.style.transform = `translateX(${diff}px) rotate(${diff / 10}deg)`;
}

function endSwipe(e) {
    let endX = e.changedTouches[0].clientX;
    let diff = endX - startX;

    if (diff > 100) {
        like();
    } else if (diff < -100) {
        dislike();
    } else {
        resetCard();
    }
}

function resetCard() {
    card.style.transform = "translateX(0)";
}

loadCats();
