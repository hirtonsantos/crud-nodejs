import { listUsersService } from "../services/listUsers.service"

const listUsersControllers = (request, response) => {
    const users = listUsersService()

    return response.json(users);
}

export default listUsersControllers