export const checkValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

  if (!isEmailValid) return "⛒ Email Id is Not Valid";
  if (!isPasswordValid) return "⛒ Password is incorrect";

  return null;
  //Here i've written null because , if this form Validate then Either Sign in or Sighn Up.
};
