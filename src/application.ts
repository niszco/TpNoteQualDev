import * as rs from "readline-sync";

import { StationMétéo } from "./station-meteo";
import { AfficheurTexte } from "./afficheur-texte";
import { AfficheurGraphique } from "./afficheur-graphique";
import { AfficheurDifference } from "./afficheur-difference";

function main(): void {
  const aff = new AfficheurTexte();
  const aff2 = new AfficheurGraphique();
  const stationMeteo = new StationMétéo(10);

  // On enregistre les observateurs dans l'array pour connaître quels observateurs vont être utilisés
  stationMeteo.enregistrerObservateur(aff);
  stationMeteo.enregistrerObservateur(aff2);

  console.log("Appuyez sur entrée pour le prochain affichage");
  rs.question();

  stationMeteo.humidité++;
  for (let p = 0; p < 10; p++) {
    console.log("Appuyez sur entrée pour le prochain affichage");
    rs.question();

    stationMeteo.humidité--;
    stationMeteo.temperature += 2;
    stationMeteo.nbrIteration = p;
  }

  for (let p = 0; p < 10; p++) {
    console.log("Appuyez sur entrée pour le prochain affichage");
    rs.question();

    stationMeteo.humidité++;
    stationMeteo.temperature -= 3;
    stationMeteo.nbrIteration = p;
  }
}

main();
