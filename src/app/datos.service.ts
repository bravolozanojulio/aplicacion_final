import { Injectable } from "@angular/core";

// Deberemos importart nuestros otros servicios y nuestra clase

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DatosService {
  private url = "https://apifinal1.herokuapp.com";
  constructor(private http: HttpClient) {}

  getMedicos() {
    const url = `https://apifinal1.herokuapp.com/julio/medicos`;
    return this.http.get(url);
  }

  getUrgencias() {
    const url = `https://apifinal1.herokuapp.com/julio/urgencias`;
    return this.http.get(url);
  }

  getMedico(id: string) {
    const url = `https://apifinal1.herokuapp.com/julio/medico/${id}`;
    return this.http.get(url);
  }

  getUrgencia(id: string) {
    const url = `https://apifinal1.herokuapp.com/julio/urgencia/${id}`;
    return this.http.get(url);
  }

  addMedico() {
    const url = `https://apifinal1.herokuapp.com/julio/addMedico`;
    return this.http.get(url);
  }

  addUrgenncia() {
    const url = `https://apifinal1.herokuapp.com/julio/addUrgencia`;
    return this.http.get(url);
  }

  borrarUrgencia(id: string) {
    const url = `https://apifinal1.herokuapp.com/julio/borrarUrgencia/${id}`;
    return this.http.get(url);
  }


  actMedico(id: string) {
    const url = `https://apifinal1.herokuapp.com/julio/actMedico/${id}`;
    return this.http.get(url);
  }

  actUrgencia(id: string) {
    const url = `https://apifinal1.herokuapp.com/julio/actUrgencia/${id}`;
    return this.http.get(url);
  }

  alcohol() {
    const url = `https://apifinal1.herokuapp.com/julio/alcohol`;
    return this.http.get(url);
  }

 mandibula() {
    const url = `https://apifinal1.herokuapp.com/julio/mandibula`;
    return this.http.get(url);
  }

 herida() {
    const url = `https://apifinal1.herokuapp.com/julio/herida`;
    return this.http.get(url);
  }

 general() {
    const url = `https://apifinal1.herokuapp.com/julio/general`;
    return this.http.get(url);
  }

 trauma() {
    const url = `https://apifinal1.herokuapp.com/julio/trauma`;
    return this.http.get(url);
  }

 sintomas() {
    const url = `https://apifinal1.herokuapp.com/julio/sintomas`;
    return this.http.get(url);
  }

  consultas() {
    const url = `https://apifinal1.herokuapp.com/julio/consultas`;
    return this.http.get(url);
  }
}
