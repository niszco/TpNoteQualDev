export interface IObservateur {
  mettreAJour(temperature: number, humidite: number, nbrIteration: number): void;
}
