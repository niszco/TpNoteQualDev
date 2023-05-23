import * as asciichart from "asciichart";
import { IObservateur } from "./observateur";

export class AfficheurGraphique implements IObservateur {
  protected tabTemperature: Array<number>;
  protected tabHumidité: Array<number>;

  constructor() {
    this.tabTemperature = [];
    this.tabHumidité = [];
  }
  // on met à jour les valeurs sur le graphique avec l'interface de l'observateur
  public mettreAJour(temperature: number, humidite: number): void {
    this.tabTemperature.push(temperature);
    this.tabHumidité.push(humidite);
    this.affiche();
  }

  private affiche(): void {
    console.log(asciichart.plot([this.tabTemperature, this.tabHumidité]));
  }
}
