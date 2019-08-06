export class User {
  id: number;
  email: string;
  isAdmin: boolean;
}

export interface IAuthResponse {
  user: User;
  access_token: string;
}
