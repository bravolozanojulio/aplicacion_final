export class Suspension {
  private _numero: number;
  private _inicio: Date;
  private _final: Date;
  private _motivos: Array<string>;

  constructor(
    numero: number,
    inicio: Date,
    final: Date,
    motivos: Array<string>
  ) {
    this._numero = numero;
    this._inicio = inicio;
    this._final = final;
    this._motivos = motivos;
  }

  // A continuación definiremos los metodos tipo Get y set para cada campo

  get numero() {
    return this._numero;
  }
  set numero(numero: number) {
    this._numero = numero;
  }

  get inicio() {
    return this._inicio;
  }
  set inicio(inicio: Date) {
    this._inicio = inicio;
  }

  get final() {
    return this._final;
  }
  set final(final: Date) {
    this._final = final;
  }

  get motivos() {
    return this._motivos;
  }
  set motivos(motivos: Array<string>) {
    this._motivos = motivos;
  }
}
