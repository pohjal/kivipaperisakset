let kivi = document.querySelector("#kivi");
let paperi = document.querySelector("#paperi");
let sakset = document.querySelector("#sakset");
const tyhjenna = document.querySelector("#tyhjenna");
const tulostaulu = document.querySelector("#tulokset");
let tietokoneP = 0;
let pelaajaP = 0;

tyhjenna.addEventListener("click", tyhjTulokset);
kivi.addEventListener("click", () => game("kivi"));
paperi.addEventListener("click", () => game("paperi"));
sakset.addEventListener("click", () => game("sakset"));

function tyhjTulokset() {
  while (tulokset.firstChild) {
    tulokset.removeChild(tulokset.firstChild);
  }
}

function tilanne() {
  let kierros = document.createElement("li");
  kierros.textContent =
    "Pisteet: Tietokone =" + tietokoneP + " Pelaaja =" + pelaajaP;
  tulostaulu.appendChild(kierros);
}

function voittaja() {
  let tulos = document.createElement("li");
  if (pelaajaP > tietokoneP)
    tulos.textContent = `Pelaaja Voitti pistein: ${pelaajaP}`;
  if (tietokoneP > pelaajaP)
    tulos.textContent = `Tietokone Voitti pistein: ${tietokoneP}`;
  else {
    tulos.textContent = `tasapeli! pelaaja pisteet: ${pelaajaP} tietokone pisteet: ${tietokoneP}`;
  }
  tulostaulu.appendChild(tulos);
  pelaajaP = 0;
  tietokoneP = 0;
}

function game(valinta) {
  var tietokone = getComputerChoise();
  var tulos = playRound(valinta, tietokone);
  let kiekka = document.createElement("li");
  kiekka.textContent = tulos;
  tulostaulu.appendChild(kiekka);

  tilanne();

  if (pelaajaP + tietokoneP > 4) {
    voittaja();
  }
}

function playRound(playerChoise, ComputerChoise) {
  if (playerChoise == null) return "vastaa Kivi,paperi tai sakset!";

  let pv = playerChoise.toLowerCase();
  if (pv == "kivi" || pv == "paperi" || pv == "sakset") {
    if (pv == "kivi") {
      if (ComputerChoise == "Sakset") {
        pelaajaP++;
        return "Voitit! Kivi voittaa Sakset!";
      }

      if (ComputerChoise == "Paperi") {
        tietokoneP++;
        return "Hävisit! Paperi voittaa Kiven!";
      }
      return "Tasuri! Kivi vs Kivi!";
    }
    if (pv == "sakset") {
      if (ComputerChoise == "Paperi") {
        pelaajaP++;
        return "Voitit! Sakset voittaa Paperin!";
      }
      if (ComputerChoise == "Kivi") {
        tietokoneP++;
        return "Hävisit! Kivi voittaa Sakset!";
      }
      return "Tasuri! Sakset vs Sakset!";
    }

    if (ComputerChoise == "Sakset") {
      tietokoneP++;
      return "Hävisit! Sakset voittaa Paperin!";
    }
    if (ComputerChoise == "Kivi") {
      pelaajaP++;
      return "Voitit! paperi voittaa Kiven!";
    }
    return "Tasuri! Paperi vs Paperi!";
  }
  return "Anna vastauksesi muodossa Kivi, Paperi tai Sakset!!";
}

function getComputerChoise() {
  let min = 1;
  let max = 3;

  let numero = Math.floor(Math.random() * (max - min + 1)) + min;

  if (numero == 1) return "Kivi";
  if (numero == 2) return "Paperi";

  return "Sakset";
}
