const knop = document.getElementById("thema-knop");

function updateKnop() {
    if (document.body.classList.contains("light")) {
        knop.textContent = "☀️";
    } else {
        knop.textContent = "🌙";
    }
}

if (localStorage.getItem("thema") == "light") {
    document.body.classList.add("light");
}

updateKnop();

knop.addEventListener("click", function () {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("thema", "light");
    } else {
        localStorage.setItem("thema", "dark");
    }

    updateKnop();
});


const plaatjes = document.querySelectorAll("img");

plaatjes.forEach(function (plaatje) {
    plaatje.addEventListener("mouseenter", function () {
        console.log("De gebruiker hovert het plaatje: " + plaatje.src);
    });
});

const navKnoppen = document.querySelectorAll(".links button")

navKnoppen.forEach(function (knop) {
    knop.addEventListener("click", function () {
        console.log("De gebruiker klikt op: " + knop.textContent);
    });
});