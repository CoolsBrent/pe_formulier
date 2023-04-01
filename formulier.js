let voornaam = document.querySelector('#voornaam')
let voornaamLabel = document.querySelector('#voornaamlabel')
let gebruikersnaam = document.querySelector('#gebruikersnaam')
let gebruikersnaamLabel = document.querySelector('#gebruikersnaamlabel')
let naam = document.querySelector('#naam')
let naamLabel = document.querySelector('#naamlabel')
let mailAdres = document.querySelector('#mailadres')
let herhaalWachtwoord = document.querySelector('#herhaalwachtwoord')
let adres = document.querySelector('#adres')
let adresLabel = document.querySelector('#adreslabel')
let land = document.querySelector('#land')
let landLabel = document.querySelector('#landlabel')
let provincie = document.querySelector('#provincie')
let provincieLabel = document.querySelector('#provincielabel')
let postcode = document.querySelector('#postcode')
let nieuwsbrief = document.querySelector('#nieuwsbrief')
let voorwaarden = document.querySelector('#voorwaarden')
let bankingapp = document.querySelector('#bankingapp')
let overschrijving = document.querySelector('#overschrijving')
let visa = document.querySelector('#visa')
let paypal = document.querySelector('#paypal')
let button = document.querySelector('#button')
let foutmelding = []
let error = ""
function checkEmptyField(veld,melding)
{
    if (veld.value == "") {
        error = `Het veld ${melding.toLowerCase()} is vereist.`
        foutmelding.push(error)
    }
    else if (veld.value == "Kies een provincie") {
        error = `Het veld ${melding.toLowerCase()} is vereist.`
        foutmelding.push(error)
    }
    else if (veld.value == 'Kies een land') {
        error = `Het veld ${melding.toLowerCase()} is vereist.`
        foutmelding.push(error)
    }
    
}
function validateForm(){
    checkEmptyField(voornaam,voornaamLabel.innerHTML)
    checkEmptyField(naam, naamLabel.innerHTML)
    checkEmptyField(gebruikersnaam, gebruikersnaamLabel.innerHTML)
    checkEmptyField(adres, adresLabel.innerHTML)
    checkEmptyField(land,landLabel.innerHTML)
    checkEmptyField(provincie,provincieLabel.innerHTML)
    
    foutmelding.forEach(element => {
        console.log(element)
    });

}

button.addEventListener('click', validateForm)

