import { IObservateur } from "./observateur";

export class AfficheurTexte implements IObservateur {
  // on met à jour les valeurs sur l'affichage textuel avec l'interface de l'observateur
  public mettreAJour(temperature: number, humidite: number, nbrIteration: number): void {
    console.log(
      "[ " +
        nbrIteration +
        " ]" +
        "Température : " +
        temperature +
        "°C\n" +
        " / " +
        "Humidité : " +
        humidite +
        "%"
    );
  }
}
