const startBtn = document.getElementById("startBtn");
const hero = document.getElementById("hero");
const mainContent = document.getElementById("mainContent");

startBtn.addEventListener("click", function () {

    hero.style.display = "none";

    mainContent.classList.remove("hidden");

    createHearts();

});


function showAnswer() {

    document.getElementById("answer").innerHTML =
        "Of course... ME! 😌❤️<br><br>Because you are my favorite person in this world! 🥰💕";

}


function openGift() {

    document.getElementById("finalLetter")
        .classList.remove("hidden");

    document.getElementById("finalLetter")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* Floating Hearts */

function createHearts() {

    setInterval(function () {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize =
            Math.random() * 25 + 20 + "px";

        document.body.appendChild(heart);

        setTimeout(function () {

            heart.remove();

        }, 6000);

    }, 500);

}