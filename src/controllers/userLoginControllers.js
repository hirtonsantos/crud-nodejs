import userLoginService from "../services/userLogin.service"

const userLoginController = (request, response) => {
    const { email, password } = request.body

    const userLogged = userLoginService(email, password)

    return response.json(userLogged)
}

export default userLoginController