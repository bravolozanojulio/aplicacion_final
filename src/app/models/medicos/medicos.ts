import { Ubicacion } from "../ubicacion";
import { Titulo } from "./titulacion";
import { Suspension } from "./suspension";

export class Medico {
  private _nacreditacion: string;
  private _nombre: string;
  private _sexo: string;
  private _fnacimiento: Date;
  private _idiomas: Array<string>;
  private _localizacion: Ubicacion;
  private _doctorado: Boolean;
  private _titulos: Array<Titulo>;
  private _suspensiones: Array<Suspension>;

  constructor(
    nacreditacion: string,
    nombre: string,
    sexo: string,
    fnacimiento: Date,
    idiomas: Array<string>,
    localizacion: Ubicacion,
    doctorado: Boolean,
    titulos: Array<Titulo>,
    suspensiones: Array<Suspension>
  ) {
    this._nacreditacion = nacreditacion;
    this._nombre = nombre;
    this._sexo = sexo;
    this._fnacimiento = fnacimiento;
    this._idiomas = idiomas;
    this._localizacion = localizacion;
    this._doctorado = doctorado;
    this._titulos = titulos;
    this._suspensiones = suspensiones;
  }

  // A continuación definiremos los metodos tipo Get y set para cada campo

  get nacreditacion() {
    return this._nacreditacion;
  }
  set nacreditacion(nacreditacion: string) {
    this._nacreditacion = nacreditacion;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  get sexo() {
    return this._sexo;
  }
  set sexo(sexo: string) {
    this._sexo = sexo;
  }

  get fnacimiento() {
    return this._fnacimiento;
  }
  set fnacimiento(fnacimiento: Date) {
    this._fnacimiento = fnacimiento;
  }

  get idiomas() {
    return this._idiomas;
  }
  set idiomas(idiomas: Array<string>) {
    this._idiomas = idiomas;
  }

  get localizacion() {
    return this._localizacion;
  }
  set localizacion(localizacion: Ubicacion) {
    this._localizacion = localizacion;
  }

  get doctorado() {
    return this._doctorado;
  }
  set doctorado(doctorado: Boolean) {
    this._doctorado = doctorado;
  }

  get titulos() {
    return this._titulos;
  }
  set titulos(titulos: Array<Titulo>) {
    this._titulos = titulos;
  }

  get suspensiones() {
    return this._suspensiones;
  }
  set suspensiones(suspensiones: Array<Suspension>) {
    this._suspensiones = suspensiones;
  }
}
