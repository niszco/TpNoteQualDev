import { IObservateur } from "./observateur";

export class StationMétéo {
  private _temperature: number;
  private _humidité: number;
  private _nbrIteration: number;
  // On ajoute un array qui utilise l'interface IObservateur
  private _observateurs: IObservateur[];

  public constructor(temperature = 0, humidité = 15, nbrIteration = 0) {
    this._temperature = temperature;
    this._humidité = humidité;
    this._nbrIteration = nbrIteration;
    this._observateurs = [];
  }

  public get temperature(): number {
    return this._temperature;
  }

  public get nbrIteration(): number {
    return this._nbrIteration;
  }

  public set temperature(temperature: number) {
    this._temperature = temperature;
    // A chaque fois que la valeur est mise à jour, on notifie notre observateur du changement
    this.notifierObservateurs();
  }

  public set nbrIteration(nbrIteration: number) {
    this._nbrIteration = nbrIteration;
    // A chaque fois que la valeur est mise à jour, on notifie notre observateur du changement
    this.notifierObservateurs();
  }

  public get humidité(): number {
    return this._humidité;
  }

  public set humidité(humidité: number) {
    if (humidité < 0 || humidité > 100) {
      throw new Error("L'humidité est exprimée en pourcentage !");
    }
    this._humidité = humidité;
    // A chaque fois que la valeur est mise à jour, on notifie notre observateur du changement
    this.notifierObservateurs();
  }

  public enregistrerObservateur(observateur: IObservateur): void {
    // Dispo dans la fonction main, on enregistre quelle classe va être observée
    this._observateurs.push(observateur);
  }

  private notifierObservateurs(): void {
    for (const observateur of this._observateurs) {
      observateur.mettreAJour(this._temperature, this._humidité, this._nbrIteration);
    }
  }

  public supprimerObservateur(observateur: IObservateur): void {
    const index = this._observateurs.indexOf(observateur);
    if (index !== -1) {
      this._observateurs.splice(index, 1);
    }
  }

  public toString(): string {
    return this._nbrIteration++ + this._temperature + "°C\n" + this._humidité + "%";
  }
}
