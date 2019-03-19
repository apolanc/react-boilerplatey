interface IUser {
  username: string;
  password: string;
}

export interface IAuthStore {
  logged?: boolean;
  user?: IUser;
  singInTime?: string;
}
