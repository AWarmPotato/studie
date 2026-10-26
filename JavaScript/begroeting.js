function toonBegroeting() {
    const uur = new Date().getHours();
    let begroeting;

    if (uur >= 6 && uur < 12) {
        begroeting = "Goedemorgen";
    }   else if (uur >= 12 && uur < 18) {
        begroeting = "Goedemiddag";
    }   else if (uur >= 18 && uur < 24) {
        begroeting = "Goedenavond";
    }   else {
        begroeting = "Goedenacht";
    }

    document.getElementById("begroeting").textContent = begroeting + ", Welkom op mijn portfolio!";
}

toonBegroeting();
