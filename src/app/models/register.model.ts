export interface RegisterModel {
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly name: {
    firstname: string,
    lastname: string
  };
  readonly address: {
    city: string,
    street: string,
    number: number,
    zipcode: string,
  };
  readonly phone: string;
}
