import { apiPost } from "..";

const usersApi = {
  postCreateUser: (name, email, password, passwordConfirmation) => {
    const user = {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    };

    apiPost("/users", { user }).then(
      (response) => {
        console.log("this", response);
      },
      (error) => {
        console.log(error);
        alert(error.request.responseText);
      }
    );
  },
};

export default usersApi;
