document.cookie = "testCookie=werkt; path=/";

console.log("Cookie test:", document.cookie);


function getCookie(name) {
    const cookies = document.cookie.split("; ");

    for (let cookie of cookies) {
        const [key, value] = cookie.split("=")

        if (key === name) {
            return value;
        }
    }

    return null;
}

const cookieKeuze = getCookie("cookieChoice");

console.log("Opgeslagen cookie:", cookieKeuze);

if (cookieKeuze === null) {

    const akkoord = confirm(
        "Deze website gebruikt cookies. klik op OK om cookies te accepteren, of op Annuleren om ze te weigeren."
    );

    if (akkoord) {
        document.cookie = "cookieChoice=accepted; max-age=2592000; path=/; SameSite=Lax";

        console.log("de gebruiker heeft de cookie prompt geacepteerd")
    
    } else {
        document.cookie = "cookieChoice=rejected; max-age=2592000; path=/; SameSite=Lax";

        console.log("de gebruiker heeft de cookies geweigerd")
    }

    console.log("Cookie na keuze:", document.cookie);

} else {
    console.log("De gebruiker heeft al eerder een keuze gemaakt:", cookieKeuze);
}



