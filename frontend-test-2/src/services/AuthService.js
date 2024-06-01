import http from './http-common'

const Login = (loginData) => {
    return http.post(`/api/auth/login`, loginData)
}

const Register = (userData) => {
    return http.post("/api/auth/register", userData);
}

const AuthService = {
    Login,
    Register
}

export default AuthService