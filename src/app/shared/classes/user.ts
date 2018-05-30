export class User {
  private _id: number;
  private _entityId: number;
  private _type: string;


  constructor() {
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get entityId(): number {
    return this._entityId;
  }

  set entityId(value: number) {
    this._entityId = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }
}
