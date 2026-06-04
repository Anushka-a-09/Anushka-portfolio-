const roles = [
"Web Developer 💻",
"AI Enthusiast 🤖",
"Guitarist 🎸",
"Singer 🎤",
"Artist 🎨"
];

let roleIndex = 0;
let charIndex = 0;

const typingText =
document.getElementById("typing-text");

function typeEffect() {

if (charIndex < roles[roleIndex].length) {

    typingText.textContent +=
    roles[roleIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 100);

} else {

    setTimeout(eraseEffect, 1500);

}

}

function eraseEffect() {

if (charIndex > 0) {

    typingText.textContent =
    roles[roleIndex].substring(
        0,
        charIndex - 1
    );

    charIndex--;

    setTimeout(eraseEffect, 50);

} else {

    roleIndex++;

    if (roleIndex >= roles.length) {
        roleIndex = 0;
    }

    setTimeout(typeEffect, 300);

}

}

typeEffect();

// =========================
// GUITAR SOUND
// =========================

const guitarCard =
document.getElementById("guitarCard");

const guitarAudio =
document.getElementById("guitarAudio");

guitarCard.addEventListener("click", () => {

guitarAudio.currentTime = 0;

guitarAudio.play();

guitarCard.style.transform =
"scale(1.05)";

setTimeout(() => {

    guitarCard.style.transform =
    "scale(1)";

}, 300);

});

// =========================
// SINGING SOUND
// =========================

const singingCard =
document.getElementById("singingCard");

const singingAudio =
document.getElementById("singingAudio");

singingCard.addEventListener("click", () => {

singingAudio.currentTime = 0;

singingAudio.play();

singingCard.style.transform =
"scale(1.05)";

setTimeout(() => {

    singingCard.style.transform =
    "scale(1)";

}, 300);

});

// =========================
// DRAWING CARD
// =========================

const drawingCard =
document.getElementById("drawingCard");

drawingCard.addEventListener("click", () => {

drawingCard.innerHTML = `
    <h3>🎨 Drawing</h3>
    <p>🖌️ Every masterpiece starts with a simple line.</p>
    <span style="
        display:block;
        margin-top:10px;
        color:#00ffff;
        font-size:1.5rem;">
        ✨
    </span>
`;

drawingCard.style.transform =
"scale(1.05)";

drawingCard.style.boxShadow =
"0 0 25px cyan";

});

// =========================
// AI SIDEKICK QUOTES
// =========================

const quotes = [

"Small steps every day lead to big results.",

"Dream big. Start small. Act now.",

"Consistency beats motivation.",

"Your future self will thank you.",

"Keep learning, keep building.",

"Believe in progress, not perfection.",

"Every expert was once a beginner.",

"Create more than you consume.",

"Stay curious and keep growing.",

"Success comes from consistent effort."

];

const quoteBtn =
document.getElementById("quoteBtn");

const quoteText =
document.getElementById("quoteText");

quoteBtn.addEventListener("click", () => {

const randomQuote =

quotes[
    Math.floor(
        Math.random() *
        quotes.length
    )
];

quoteText.textContent =
randomQuote;

});

// =========================
// SCROLL REVEAL
// =========================

const cards = document.querySelectorAll(
".skill-card, .project-card, .hobby-card, .about-card, .github-card, .contact-card"
);

const observer =
new IntersectionObserver(entries => {

entries.forEach(entry => {

    if (entry.isIntersecting) {

        entry.target.style.opacity = "1";

        entry.target.style.transform =
        "translateY(0px)";

    }

});

}, {
threshold: 0.15
});

cards.forEach(card => {

card.style.opacity = "0";

card.style.transform =
"translateY(40px)";

card.style.transition =
"all 0.8s ease";

observer.observe(card);

});

console.log(
"Welcome to Aniket Tamang's Portfolio 🚀"
);
