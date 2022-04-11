export class User {
  private _name: string;
  private _lastname: string;
  private _email: string;
  private _password: string;


  constructor(name: string, lastname: string, email: string, password: string) {
    this._name = name;
    this._lastname = lastname;
    this._email = email;
    this._password = password
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}
