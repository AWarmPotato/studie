const inleverdatum = new Date (2028, 9, 4, 23, 59, 0);

const tekstElement = document.getElementById("countdown-text");

function updateCountDown() {
    const nu = new Date();
    const verschil = inleverdatum - nu;

    if (verschil <= 0) {
        tekstElement.textContent = "De inlever datum is berijkt!"
        clearInterval(timer);
        return;
    }
    
    const dagen = Math.floor(verschil / (1000 * 60 * 60 * 24));
    const uren = Math.floor((verschil / (1000 * 60 * 60)) % 24);
    const minuten = Math.floor((verschil / (1000 * 60)) % 60);
    const seconden = Math.floor((verschil / 1000) % 60);

    tekstElement.textContent = 
        dagen + " dagen, " + uren + " uren, " + minuten + " minuten en " + seconden + " seconden";
}

updateCountDown();
const timer = setInterval(updateCountDown, 1000);