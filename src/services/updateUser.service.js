import users from "../database";

const updateUserService = (id, name, email) => {

  id = Number(id)

  const updateUser = {
    id,
    name,
    email,
  };

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return "User not found";
  }

  users[userIndex] = { ...users[userIndex], ...updateUser };

  return users[userIndex];
};

export default updateUserService