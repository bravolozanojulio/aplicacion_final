export class Afectado {
  private _adulto: boolean;
  private _edad: number;
  private _sexo: string;
  private _alergias: Array<string>;
  private _enfermedades: Array<string>;
  constructor(
    adulto: boolean,
    edad: number,
    sexo: string,
    alergias: Array<string>,
    enfermedades: Array<string>
  ) {
    this._adulto = adulto;
    this._edad = edad;
    this._sexo = sexo;
    this._alergias = alergias;
    this._enfermedades = enfermedades;
  }

  // A continuación definiremos los metodos tipo Get y set para cada campo

  get adulto() {
    return this._adulto;
  }
  set adulto(adulto: boolean) {
    this._adulto = adulto;
  }

  get edad() {
    return this._edad;
  }
  set edad(edad: number) {
    this._edad = edad;
  }

  get sexo() {
    return this._sexo;
  }
  set sexo(sexo: string) {
    this._sexo = sexo;
  }

  get alergias() {
    return this._alergias;
  }
  set alergias(alergias: Array<string>) {
    this._alergias = alergias;
  }

  get enfermedades() {
    return this._enfermedades;
  }
  set enfermedades(enfermedades: Array<string>) {
    this._enfermedades = enfermedades;
  }
}
