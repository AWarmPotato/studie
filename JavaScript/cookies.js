const akkoord = confirm(
    "Deze website gebruikt cookies. klik op OK om cookies te accepteren, of op Annuleren om ze te weigeren."
)

if (akkoord) {
    console.log("de gebruiker heeft de cookie prompt geacepteerd")
} else {
    console.log("de gebruiker heeft de cookies geweigerd")
}
