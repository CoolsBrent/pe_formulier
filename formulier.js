let voornaam = document.querySelector('#voornaam')
let voornaamLabel = document.querySelector('#voornaamlabel')
let gebruikersnaam = document.querySelector('#gebruikersnaam')
let gebruikersnaamLabel = document.querySelector('#gebruikersnaamlabel')
let naam = document.querySelector('#naam')
let naamLabel = document.querySelector('#naamlabel')
let mailAdres = document.querySelector('#mailadres')
let wachtwoord = document.querySelector('#wachtwoord')
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
let radio_btn = document.getElementsByName('flexRadioDefault')
let bankingapp = document.querySelector('#bankingapp')
let overschrijving = document.querySelector('#overschrijving')
let visa = document.querySelector('#visa')
let paypal = document.querySelector('#paypal')
let button = document.querySelector('#button')
let succes = document.querySelector('#succes')
let verkeerd = document.querySelector('#verkeerd')
let betalingswijze = document.querySelector('#betalingswijze')
let foutmelding = []
let error = ""
let payment = []
let message = ""
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
function validateEmail(mailAdres)
{
let juisteMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (mailAdres.value == "") {
    error = `Het veld email is vereist.`
    foutmelding.push(error)
}
else if(mailAdres.value.match(juisteMail))
{

return true;
}
else
{
error = 'E-mailadres is niet correct.'
foutmelding.push(error)
return false;
}
}
function checkPassword(wachtwoord,herhaalWachtwoord)
{
    
    
    if (wachtwoord.value == "") {
        error = `Het veld wachtwoord is vereist.`
        foutmelding.push(error)
    }
    else if (wachtwoord.value.length < 8) 
    {
        error = 'Je wachtwood is te kort.'
        foutmelding.push(error)
    }
    else if (herhaalWachtwoord.value == "") 
    {
        error = `Het veld herhaal wachtwoord is vereist.`
        foutmelding.push(error) 
    }
   
    else if (wachtwoord.value != herhaalWachtwoord.value) 
    {
        error = 'Je wachtwoorden komen niet overeen.'
        foutmelding.push(error)
    }
    
    
}
function validatePayment(veld)
{
if (veld.checked) {
    if (veld.value == 'bankingapp') {
        message = 'Je betaalwijze is banking app.'
            payment.push(message)
    }
    else if (veld.value == 'overschrijving') {
        message = 'Je betaalwijze is overschrijving.'
        payment.push(message)
    }
    else if (veld.value == 'visa') {
        message = 'Je betaalwijze is visa.'
        payment.push(message)
    }
    else if (veld.value == 'paypal') {
        message = 'Je betaalwijze is paypal.'
        payment.push(message)
    }
}

}
function checkPC(veld)
{
    if (veld.value == "") {
        error = 'Het veld postcode is vereist.'
        foutmelding.push(error)
    }
    else if (veld.value < 1000 || veld.value > 9999) {
        error = 'De waarde van postcode moet tussen 1000 en 9999 liggen.'
        foutmelding.push(error)   
       }
   
    
}
function validateTerms(veld)
{
    if (veld.checked) {
        return true
}
else{
    error = 'Je moet de algemene voorwaarden accepteren.'
    foutmelding.push(error)
}
}
function validateForm()
{
    verkeerd.innerHTML = ""
    checkEmptyField(voornaam,voornaamLabel.innerHTML)
    checkEmptyField(naam, naamLabel.innerHTML)
    checkEmptyField(gebruikersnaam, gebruikersnaamLabel.innerHTML)
    checkEmptyField(adres, adresLabel.innerHTML)
    checkEmptyField(land,landLabel.innerHTML)
    checkEmptyField(provincie,provincieLabel.innerHTML)
    validateEmail(mailAdres)
    checkPassword(wachtwoord, herhaalWachtwoord)
    validatePayment(bankingapp)
    validatePayment(overschrijving)
    validatePayment(visa)
    validatePayment(paypal)
    checkPC(postcode)
    validateTerms(voorwaarden)
    if (foutmelding == "") {
        succes.innerHTML = 'Aww yeah, je werd geregistreerd.'
    }
    
    foutmelding.forEach(element => {
        
        verkeerd.innerHTML += element + "<br>";
    });
    payment.forEach(element =>{
    betalingswijze.innerHTML = element
    
});
    
foutmelding = []


}


button.addEventListener('click', validateForm)

