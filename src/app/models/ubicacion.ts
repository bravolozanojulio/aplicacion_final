export class Ubicacion {
  private _type: string;
  private _coordinates: Array<number>;

  constructor(type: string, coordinates: Array<number>) {
    this._type = type;
    this._coordinates = coordinates;
  }

  // A continuación definiremos los metodos tipo Get y set para cada campo

  get type() {
    return this._type;
  }
  set type(type: string) {
    this._type = type;
  }

  get coordinates() {
    return this._coordinates;
  }
  set coordinates(coordinates: Array<number>) {
    this._coordinates = this.coordinates;
  }
}
