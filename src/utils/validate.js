export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  // ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // const isNameValidate = /b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

  if (!isEmailValid) return "⛒ Email Id is Not Valid";

  if (!isPasswordValid) return "⛒ Password is Not Valid";
  // if (!isNameValidate) return "⛒ Please correct your name";

  return null;
  //Here i've written null because , if this form Validate then Either Sign in or Sighn Up.
};
