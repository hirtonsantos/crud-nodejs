import users from "../database";

const createUserService = (email, name) => {
  const userAlreadyExists = users.find((user) => user.email === email);

  if (userAlreadyExists) {
    return response
      .status(400)
      .json({ error: "This email is already being used" });
  }

  const newUser = {
    email,
    name,
    id: users.length + 1,
  };

  users.push(newUser);

  return newUser;
};

export default createUserService;
