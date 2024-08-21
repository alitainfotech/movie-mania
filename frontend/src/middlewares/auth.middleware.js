import { authAPIs } from "../services/auth.service"
import { LoginError, LoginRequest, LoginSuccess, LogOutError, LogOutRequest, LogOutSuccess } from "../store/slices/auth.slice"

export const login = (payload) => {
    return async (dispath) => {
        dispath(LoginRequest())
        await authAPIs.login(payload).then((res) => {
            const { data, message } = res.data
            localStorage.setItem('auth', JSON.stringify(data))
            dispath(LoginSuccess(message))
        }).catch((error) => {
            dispath(LoginError(error))
        })
    }
}

export const logOut = () => {
    
    return async (dispath) => {
        dispath(LogOutRequest())
        await authAPIs.logOut().then((res) => {
            const { message } = res.data
            localStorage.removeItem('auth')
            dispath(LogOutSuccess(message))
        }).catch((error) => {
            dispath(LogOutError(error))
        })
    }
}