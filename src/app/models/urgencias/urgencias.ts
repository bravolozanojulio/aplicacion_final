import { Ubicacion } from "../ubicacion";
import { Afectado } from "./afectado";

export class Urgencia {
  private _nregistro: string;
  private _provincia: string;
  private _hospital: string;
  private _ubicacionh: Ubicacion;
  private _furgencia: Date;
  private _seccion: string;
  private _sintomas: Array<string>;
  private _diagnostico: string;
  private _idmedico: string;
  private _afectado: Afectado;

  constructor(
    nregistro: string,
    provincia: string,
    hospital: string,
    ubicacionh: Ubicacion,
    furgencia: Date,
    seccion: string,
    sintomas: Array<string>,
    diagnostico: string,
    idmedico: string,
    afectado: Afectado
  ) {
    this._nregistro = nregistro;
    this._provincia = provincia;
    this._hospital = hospital;
    this._ubicacionh = ubicacionh;
    this._furgencia = furgencia;
    this._seccion = seccion;
    this._sintomas = sintomas;
    this._diagnostico = diagnostico;
    this._idmedico = idmedico;
    this._afectado = afectado;
  }

  // A continuación definiremos los metodos tipo Get y set para cada campo

  get nregistro() {
    return this._nregistro;
  }
  set nregistro(nregistro: string) {
    this._nregistro = nregistro;
  }

  get provincia() {
    return this._provincia;
  }
  set provincia(provincia: string) {
    this._provincia = provincia;
  }

  get ubicacionh() {
    return this._ubicacionh;
  }
  set ubicacionh(ubicacionh: Ubicacion) {
    this._ubicacionh = ubicacionh;
  }

  get hospital() {
    return this._hospital;
  }
  set hospital(hospital: string) {
    this._hospital = hospital;
  }

  get furgencia() {
    return this._furgencia;
  }
  set furgencia(furgencia: Date) {
    this._furgencia = furgencia;
  }

  get seccion() {
    return this._seccion;
  }
  set seccion(seccion: string) {
    this._seccion = seccion;
  }

  get sintomas() {
    return this._sintomas;
  }
  set sintomas(sintomas: Array<string>) {
    this._sintomas = sintomas;
  }

  get diagnostico() {
    return this._diagnostico;
  }
  set diagnostico(diagnostico: string) {
    this._diagnostico = diagnostico;
  }

  get idmedico() {
    return this._idmedico;
  }
  set idmedico(idmedico: string) {
    this._idmedico = idmedico;
  }

  get afectado() {
    return this._afectado;
  }
  set afectado(afectado: Afectado) {
    this._afectado = afectado;
  }
}
