import users from "../database";
import * as bycrpt from "bcryptjs"

const createUserService = async (email, name, password) => {

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
