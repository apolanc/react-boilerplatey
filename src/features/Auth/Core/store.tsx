import { IAuthStore } from "../interfaces";

const initialStore: IAuthStore = {
  user: {
    username: "",
    password: ""
  },
  logged: false,
  singInTime: new Date().toString()
};

function SignIn(user: string): void {
  localStorage.setItem(user, "logged");
}

function SignOut(user: string): void {
  if (localStorage.getItem(user)) {
    localStorage.removeItem(user);
  }
}

export default {
  authStore: initialStore,
  SignIn,
  SignOut
};
