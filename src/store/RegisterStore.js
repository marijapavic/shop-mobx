import { action, makeObservable, observable } from "mobx";
import AuthService from "../services/AuthService";
import form from "../utils/registerForm";

class Store {
  constructor() {
    makeObservable(this, {
      onRegister: action,
      AuthService: observable,
    });
  }

  AuthService = new AuthService();

  onRegister = () => {
    form.submit({
      onSuccess: () => {
        const { name, email, password } = form.values();
        this.AuthService.registerUser(name, email, password);
      },
      onError: (error) => console.log(error),
    });
  };
}

export const RegisterStore = new Store();
