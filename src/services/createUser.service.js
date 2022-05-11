import users from "../database";
import * as bycrpt from "bcryptjs"

const createUserService = async (email, name, password) => {
  const userAlreadyExists = users.find((user) => user.email === email);

  if (userAlreadyExists) {
    return response
      .status(400)
      .json({ error: "This email is already being used" });
  }

  const hashedPassword = await bycrpt.hash(password, 10)

  const newUser = {
    email,
    name,
    password: hashedPassword,
    id: users.length + 1,
  };

  users.push(newUser);

  return newUser;
};

export default createUserService;
