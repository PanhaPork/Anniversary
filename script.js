const startBtn = document.getElementById("startBtn");
const hero = document.getElementById("hero");
const mainContent = document.getElementById("mainContent");
const giftBox = document.getElementById("giftBox");
const finalLetter = document.getElementById("finalLetter");
const answerText = document.getElementById("answer");

let heartInterval = null;

startBtn.addEventListener("click", function () {

    hero.style.display = "none";
    mainContent.classList.remove("hidden");
    startFloatingHearts();

});

function showAnswer() {

    answerText.innerHTML =
        "Of course... ME! 😌❤️<br><br>Because you are my favorite person in this world! 🥰💕";
    answerText.classList.add("revealed");

}

function openGift() {

    giftBox.classList.add("opened");
    giftBox.textContent = "💌";
    finalLetter.classList.remove("hidden");
    finalLetter.classList.add("show");
    finalLetter.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

/* Floating Hearts */

function startFloatingHearts() {

    if (heartInterval) return;

    heartInterval = setInterval(function () {

        const heart = document.createElement("div");

        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 25 + 20 + "px";
        heart.style.animationDelay = Math.random() * 1.5 + "s";

        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 6000);

    }, 500);

}
