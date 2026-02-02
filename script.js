let images = [];
let index = 0;
let liked = [];

const TOTAL = 15;

// Fun captions for the polaroid
const captions = [
    "Is this love? 😻",
    "Your new bestie?",
    "Adopt me maybe? 🐱",
    "Purr-fect match?",
    "Feeling the vibe?",
    "Cat-ch your eye?",
    "Love at first sight?",
    "The one? 💕",
    "Meow or nah?",
    "Heart eyes?",
    "Swipe right? 😸",
    "Whisker winner?",
    "Feline good?",
    "Too cute to pass?",
    "Your soulmate? 💖"
];

// DOM Elements
let card;
let likeIndicator;
let dislikeIndicator;
let cardContainer;
let loading;
let caption;

// Swipe variables
let startX = 0;
let isDragging = false;

// Initialize app
async function init() {
    card = document.getElementById("card");
    likeIndicator = document.getElementById("like-indicator");
    dislikeIndicator = document.getElementById("dislike-indicator");
    cardContainer = document.getElementById("card-container");
    loading = document.getElementById("loading");
    caption = document.getElementById("caption");

    // Add event listeners for swipe
    card.addEventListener("touchstart", startSwipe, { passive: false });
    card.addEventListener("touchmove", moveSwipe, { passive: false });
    card.addEventListener("touchend", endSwipe);

    // Add mouse events for desktop
    card.addEventListener("mousedown", startSwipe);
    card.addEventListener("mousemove", moveSwipe);
    card.addEventListener("mouseup", endSwipe);
    card.addEventListener("mouseleave", endSwipe);

    await loadCats();
}

async function loadCats() {
    // Show loading spinner
    card.style.display = "none";
    loading.classList.remove("hidden");
    loading.classList.add("flex");

    // Load cat images with unique timestamps
    for (let i = 0; i < TOTAL; i++) {
        images.push(`https://cataas.com/cat?${Date.now()}-${i}`);
    }

    // Preload first image
    const firstImage = new Image();
    firstImage.onload = () => {
        loading.classList.add("hidden");
        loading.classList.remove("flex");
        card.style.display = "block";
        showImage();
    };
    firstImage.onerror = () => {
        // If image fails to load, still show the card
        loading.classList.add("hidden");
        loading.classList.remove("flex");
        card.style.display = "block";
        showImage();
    };
    firstImage.src = images[0];
}

function showImage() {
    if (index < images.length) {
        const img = document.getElementById("catImage");

        // Simple image update without complex transitions
        img.src = images[index];

        // Update counter and caption
        document.getElementById("counter").innerText = `Cat ${index + 1} of ${TOTAL}`;
        caption.innerText = captions[index % captions.length];

        // Reset indicators
        likeIndicator.style.opacity = "0";
        dislikeIndicator.style.opacity = "0";
    } else {
        showResult();
    }
}

function like() {
    if (index >= images.length) return;

    liked.push(images[index]);
    animateSwipe("right");
}

function dislike() {
    if (index >= images.length) return;

    animateSwipe("left");
}

function animateSwipe(direction) {
    // Add animation class
    card.classList.add(`swipe-${direction}`);

    // Wait for animation to complete
    setTimeout(() => {
        card.classList.remove(`swipe-${direction}`);
        index++;
        resetCard();
        showImage();
    }, 300);
}

function showResult() {
    // Hide main UI elements
    document.getElementById("card-container").style.display = "none";
    document.querySelector(".buttons").style.display = "none";
    document.getElementById("counter").style.display = "none";

    let resultDiv = document.getElementById("result");
    resultDiv.classList.remove("hidden");
    resultDiv.classList.add("fade-in");

    let html = "";

    if (liked.length === 0) {
        html = `
            <div class="py-8">
                <h3 class="text-4xl font-bold text-pink-500 mb-5 handwritten">No cats liked? 😿</h3>
                <p class="text-xl text-gray-600 mb-8 handwritten">Maybe you're more of a dog person?</p>
                <button onclick="restart()" 
                        class="flex flex-col items-center justify-center gap-2 px-10 py-5 border-none rounded-full text-lg font-semibold cursor-pointer transition-all duration-300 shadow-lg bg-gradient-to-br from-pink-400 to-purple-400 text-white hover:shadow-xl hover:-translate-y-1 active:scale-95 mx-auto">
                    <span class="text-3xl">🔄</span>
                    <span class="text-sm uppercase tracking-wider">Try Again</span>
                </button>
            </div>
        `;
    } else {
        html = `
            <div class="max-h-[60vh] overflow-y-auto pb-4">
                <h3 class="text-4xl font-bold text-pink-500 mb-6 handwritten sticky top-0 bg-white py-2">
                    You liked ${liked.length} ${liked.length === 1 ? 'cat' : 'cats'}! 😺
                </h3>
                <div class="grid grid-cols-3 gap-4 mb-6">
        `;

        liked.forEach((img, i) => {
            html += `
                <div class="bg-white p-2 rounded-lg card-shadow transform hover:scale-105 transition-transform duration-300">
                    <img src="${img}" alt="Liked cat ${i + 1}" 
                         class="w-full h-28 object-cover rounded" loading="lazy" />
                </div>
            `;
        });

        html += `
                </div>
            </div>
            <button onclick="restart()" 
                    class="flex flex-col items-center justify-center gap-2 px-10 py-5 border-none rounded-full text-lg font-semibold cursor-pointer transition-all duration-300 shadow-lg bg-gradient-to-br from-pink-400 to-purple-400 text-white hover:shadow-xl hover:-translate-y-1 active:scale-95 mx-auto mt-4">
                <span class="text-3xl">🔄</span>
                <span class="text-sm uppercase tracking-wider">Start Over</span>
            </button>
        `;
    }

    resultDiv.innerHTML = html;
}

function restart() {
    index = 0;
    liked = [];
    images = [];

    document.getElementById("card-container").style.display = "flex";
    document.querySelector(".buttons").style.display = "flex";
    document.getElementById("counter").style.display = "block";
    document.getElementById("result").classList.add("hidden");

    init();
}

/* Swipe Gesture Logic */

function startSwipe(e) {
    e.preventDefault();
    isDragging = true;

    if (e.type === "mousedown") {
        startX = e.clientX;
    } else {
        startX = e.touches[0].clientX;
    }
}

function moveSwipe(e) {
    if (!isDragging) return;

    let currentX;

    if (e.type === "mousemove") {
        currentX = e.clientX;
    } else {
        currentX = e.touches[0].clientX;
    }

    let diffX = currentX - startX;

    // Calculate rotation based on horizontal movement
    let rotation = diffX / 10;

    // Use requestAnimationFrame for smoother performance
    requestAnimationFrame(() => {
        // Apply transform (only horizontal movement)
        card.style.transform = `translateX(${diffX}px) rotate(${rotation}deg)`;

        // Show/hide indicators based on swipe direction
        if (diffX > 50) {
            likeIndicator.style.opacity = "1";
            dislikeIndicator.style.opacity = "0";
        } else if (diffX < -50) {
            dislikeIndicator.style.opacity = "1";
            likeIndicator.style.opacity = "0";
        } else {
            likeIndicator.style.opacity = "0";
            dislikeIndicator.style.opacity = "0";
        }
    });
}

function endSwipe(e) {
    if (!isDragging) return;
    isDragging = false;

    let endX;

    if (e.type === "mouseup" || e.type === "mouseleave") {
        if (e.type === "mouseleave" && !isDragging) return;
        endX = e.clientX;
    } else {
        endX = e.changedTouches[0].clientX;
    }

    let diff = endX - startX;

    // Threshold for swipe detection
    const SWIPE_THRESHOLD = 100;

    if (diff > SWIPE_THRESHOLD) {
        like();
    } else if (diff < -SWIPE_THRESHOLD) {
        dislike();
    } else {
        resetCard();
    }
}

function resetCard() {
    card.style.transform = "translateX(0) rotate(0)";
    likeIndicator.style.opacity = "0";
    dislikeIndicator.style.opacity = "0";
}

// Start the app
init();