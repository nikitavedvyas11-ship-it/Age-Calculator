import * as EmailValidator from "email-validator";
export const isValidEmail = (email) => {
  if (!EmailValidator.validate(email)) {
    return false;
  }
  const allowedDomains = ["gmail.com","yahoo.com","outlook.com","hotmail.com"];
  const domain = email.split("@")[1];
  return allowedDomains.includes(domain);
};
// Password Validation
export const isValidPassword = (password) => {
    const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    return passwordRegex.test(password);
};
