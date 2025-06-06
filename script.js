
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const status = document.getElementById("status");

document.addEventListener("keydown", function(event) {
    if (event.code === "Space" && !dino.classList.contains("jump")) {
        dino.classList.add("jump");
        setTimeout(() => dino.classList.remove("jump"), 500);
    }
});

let checkCollision = setInterval(() => {
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 90 && cactusLeft > 50 && dinoTop >= 140) {
        cactus.style.animation = "none";
        cactus.style.left = `${cactusLeft}px`;
        status.innerHTML = "💥 Você perdeu! Recarregue a página para jogar novamente.";
        clearInterval(checkCollision);
    }
}, 10);
