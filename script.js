function getComputerChoise() {
  let min = 1;
  let max = 3;

  let numero = Math.floor(Math.random() * (max - min + 1)) + min;

  if (numero == 1) return "Kivi";
  if (numero == 2) return "Paperi";

  return "Sakset";
}

function tilanne() {
  console.log("Pisteet: Tietokone =" + tietokone + " Pelaaja =" + pelaaja);
}

function voittaja() {
  if (pelaaja > tietokone) console.log(`Pelaaja Voitti pistein: ${pelaaja}`);
  if (tietokone > pelaaja)
    console.log(`Tietokone Voitti pistein: ${tietokone}`);
  else {
    console.log(
      `tasapeli! pelaaja pisteet: ${pelaaja} tietokone pisteet: ${tietokone}`
    );
  }
}

let tietokone = 0;
let pelaaja = 0;
function game() {
  for (var i = 0; i < 5; i++) {
    var tietokone = getComputerChoise();
    var pelaaja = prompt("Kivi , paperi sakset?: ");
    var tulos = playRound(pelaaja, tietokone);
    console.log(tulos);
    tilanne();
  }
  voittaja();
}

function playRound(playerChoise, ComputerChoise) {
  if (playerChoise == null) return "vastaa Kivi,paperi tai sakset!";

  let pv = playerChoise.toLowerCase();
  if (pv == "kivi" || pv == "paperi" || pv == "sakset") {
    if (pv == "kivi") {
      if (ComputerChoise == "Sakset") {
        pelaaja++;
        return "Voitit! Kivi voittaa Sakset!";
      }

      if (ComputerChoise == "Paperi") {
        tietokone++;
        return "Hävisit! Paperi voittaa Kiven!";
      }
      return "Tasuri! Kivi vs Kivi!";
    }
    if (pv == "sakset") {
      if (ComputerChoise == "Paperi") {
        pelaaja++;
        return "Voitit! Sakset voittaa Paperin!";
      }
      if (ComputerChoise == "Kivi") {
        tietokone++;
        return "Hävisit! Kivi voittaa Sakset!";
      }
      return "Tasuri! Sakset vs Sakset!";
    }

    if (ComputerChoise == "Sakset") {
      tietokone++;
      return "Hävisit! Sakset voittaa Paperin!";
    }
    if (ComputerChoise == "Kivi") {
      pelaaja++;
      return "Voitit! paperi voittaa Kiven!";
    }
    return "Tasuri! Paperi vs Paperi!";
  }
  return "Anna vastauksesi muodossa Kivi, Paperi tai Sakset!!";
}
