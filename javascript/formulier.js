let voornaam = document.querySelector("#voornaam");
let voornaamLabel = document.querySelector("#voornaamlabel");
let gebruikersnaam = document.querySelector("#gebruikersnaam");
let gebruikersnaamLabel = document.querySelector("#gebruikersnaamlabel");
let naam = document.querySelector("#naam");
let naamLabel = document.querySelector("#naamlabel");
let mailAdres = document.querySelector("#mailadres");
let wachtwoord = document.querySelector("#wachtwoord");
let herhaalWachtwoord = document.querySelector("#herhaalwachtwoord");
let adres = document.querySelector("#adres");
let adresLabel = document.querySelector("#adreslabel");
let land = document.querySelector("#land");
let landLabel = document.querySelector("#landlabel");
let provincie = document.querySelector("#provincie");
let provincieLabel = document.querySelector("#provincielabel");
let postcode = document.querySelector("#postcode");
let nieuwsbrief = document.querySelector("#nieuwsbrief");
let voorwaarden = document.querySelector("#voorwaarden");
let radio_btn = document.getElementsByName("flexRadioDefault");
let bankingapp = document.querySelector("#bankingapp");
let overschrijving = document.querySelector("#overschrijving");
let visa = document.querySelector("#visa");
let paypal = document.querySelector("#paypal");
let button = document.querySelector("#button");
let succes = document.querySelector("#succes");
let verkeerd = document.querySelector("#verkeerd");
let betalingswijze = document.querySelector("#betalingswijze");
let foutmelding = [];
let error = "";
let payment = [];
let message = "";
let groen = document.querySelector("#groen");
let blauw = document.querySelector("#blauw");
let rood = document.querySelector("#rood");
let alerts = document.querySelector("#alerts");



function checkEmptyField(veld, melding) {
  if (veld.value == "") {
    error = `Het veld ${melding.toLowerCase()} is vereist.`;
    foutmelding.push(error);
  } else if (veld.value == "Kies een provincie") {
    error = `${melding} is vereist.`;
    foutmelding.push(error);
  } else if (veld.value == "Kies een land") {
    error = `${melding} is vereist.`;
    foutmelding.push(error);
  }
}
function validateEmail(mailAdres) {
  let juisteMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   //https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
  if (mailAdres.value == "") {
    error = `Het veld email is vereist.`;
    foutmelding.push(error);
  } else if (mailAdres.value.match(juisteMail)) {
    return true;
  } else {
    error = "E-mailadres is niet correct.";
    foutmelding.push(error);
    return false;
  }
}
function checkPassword(wachtwoord, herhaalWachtwoord) {
  if (wachtwoord.value == "") {
    error = `Het veld wachtwoord is vereist.`;
    foutmelding.push(error);
  } else if (wachtwoord.value.length < 8) {
    error = "Je wachtwoord is te kort.";
    foutmelding.push(error);
  } if (herhaalWachtwoord.value == "") {
    error = `Het veld herhaal wachtwoord is vereist.`;
    foutmelding.push(error);
  } else if (wachtwoord.value != herhaalWachtwoord.value) {
    error = "Je wachtwoorden komen niet overeen.";
    foutmelding.push(error);
  }
}
function validatePayment(veld) {
  if (veld.checked) {
    if (veld.value == "bankingapp") {
      message = "Je betaalwijze is banking app.";
      payment.push(message);
    } else if (veld.value == "overschrijving") {
      message = "Je betaalwijze is overschrijving.";
      payment.push(message);
    } else if (veld.value == "visa") {
      message = "Je betaalwijze is visa.";
      payment.push(message);
    } else if (veld.value == "paypal") {
      message = "Je betaalwijze is paypal.";
      payment.push(message);
    }
  }
}
function checkPC(veld) {
  if (veld.value == "") {
    error = "Postcode is vereist.";
    foutmelding.push(error);
  } else if (veld.value < 1000 || veld.value > 9999) {
    error = "De waarde van postcode moet tussen 1000 en 9999 liggen.";
    foutmelding.push(error);
  }
}
function validateTerms(veld) {
  if (veld.checked) {
    return true;
  } else {
    error = "Je moet de algemene voorwaarden accepteren.";
    foutmelding.push(error);
  }
}
function validateForm() {
  verkeerd.innerHTML = "";
  checkEmptyField(voornaam, voornaamLabel.innerHTML);
  checkEmptyField(naam, naamLabel.innerHTML);
  checkEmptyField(gebruikersnaam, gebruikersnaamLabel.innerHTML);
  validateEmail(mailAdres);
  checkPassword(wachtwoord, herhaalWachtwoord);
  checkEmptyField(adres, adresLabel.innerHTML);
  checkEmptyField(land, landLabel.innerHTML);
  checkEmptyField(provincie, provincieLabel.innerHTML);
  validatePayment(bankingapp);
  validatePayment(overschrijving);
  validatePayment(visa);
  validatePayment(paypal);
  checkPC(postcode);
  validateTerms(voorwaarden);
  if (foutmelding == "") {
    groen.style.display = "block";
    blauw.style.display = "block";
    rood.style.display = "none";
    succes.innerHTML = "Aww yeah, je werd geregistreerd.";
    payment.forEach((element) => {
      betalingswijze.innerHTML = element;
    });
  } else {
    rood.style.display = "block";
    groen.style.display = "none";
    blauw.style.display = "none";
    foutmelding.forEach((element) => {
      verkeerd.innerHTML += element + "<br>";
    });
  }

  foutmelding = [];
  alerts.style.display = "block";
 
}

alerts.style.display = "none";
groen.style.display = "none";
blauw.style.display = "none";
rood.style.display = "none";

button.addEventListener("click", validateForm);
