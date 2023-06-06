import { IObservateur } from "./observateur";

export class AfficheurDifference implements IObservateur {
  protected _oldTemperature: number;
  protected _newTemperature: number;
  protected _oldHumidite: number;
  protected _newHumidite: number;

  public constructor(
    oldTemperature: number,
    newTemperature: number,
    oldHumidite: number,
    newHumidite: number
  ) {
    this._newHumidite = newHumidite;
    this._oldTemperature = oldTemperature;
    this._newTemperature = newTemperature;
    this._oldHumidite = oldHumidite;
  }

  mettreAJour(temperature: number, humidite: number) {
    temperature = this._oldTemperature;
    humidite = this._oldHumidite;
    this._newTemperature = temperature;
    this._newHumidite = humidite;
  }

  differenceCalcul(): void {
    let result = new Map<string, number>();
    result.set("Différence de température", this._newTemperature - this._oldTemperature);
    result.set("Différence d'humidité", this._newHumidite - this._oldHumidite);
  }
}
