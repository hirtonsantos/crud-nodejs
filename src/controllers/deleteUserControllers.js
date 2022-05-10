import deleteUserService from "../services/deleteUser.service"

const deleteUserControllers = (request, response) => {
    const { id } = request.params

    const deleteUser = deleteUserService(id)

    return response.json(deleteUser)
}

export default deleteUserControllers