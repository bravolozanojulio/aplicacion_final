export class Titulo {
  private _ntitu: string;
  private _tipo: string;
  private _uni: string;
  private _fecha: Date;

  constructor(ntitu: string, tipo: string, uni: string, fecha: Date) {
    this._ntitu = ntitu;
    this._tipo = tipo;
    this._uni = uni;
    this._fecha = fecha;
  }

  // A continuación definiremos los metodos tipo Get y set para cada campo

  get ntitu() {
    return this._ntitu;
  }
  set ntitu(ntitu: string) {
    this._ntitu = ntitu;
  }

  get tipo() {
    return this._tipo;
  }
  set tipo(tipo: string) {
    this._tipo = tipo;
  }

  get uni() {
    return this._uni;
  }
  set uni(uni: string) {
    this._uni = uni;
  }

  get fecha() {
    return this._fecha;
  }
  set fecha(fecha: Date) {
    this._fecha = fecha;
  }
}
