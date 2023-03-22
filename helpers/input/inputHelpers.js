import bcrypt from "bcrypt";

const validateUserInput = (name, email) => {
  return name && email;
};

const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

export { validateUserInput, comparePassword };
