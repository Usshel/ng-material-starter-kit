export interface UserModel {
  readonly id: number;
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly name: {
    readonly firstname: string,
    readonly lastname: string
  };
}
