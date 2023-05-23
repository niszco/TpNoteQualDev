import * as asciichart from "asciichart";

export class AfficheurGraphique {
  private tabTemperature: Array<number>;
  private tabHumidité: Array<number>;

  constructor() {
    this.tabTemperature = [];
    this.tabHumidité = [];
  }

  affiche(): void {
    console.log(asciichart.plot([this.tabTemperature, this.tabHumidité]));
  }
}
