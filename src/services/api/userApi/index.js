import { apiPost } from "..";

const usersApi = {
  postCreateUser: (name, email, password, passwordConfirmation, func) => {
    const user = {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    };

    apiPost("/users", { user }).then(
      (response) => {
        func(response);
      },
      (error) => {
        func(error);
        alert(error.request.responseText);
      }
    );
  },
};

export default usersApi;
