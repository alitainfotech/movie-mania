import { get, post } from "../AxiosConfig"

const URI = '/auth/'
const login = (payload) => {
    const url = `${URI}login`
    return post(url, payload)
}

const logOut = (payload) => {
    const url = `${URI}logout`
    return get(url, payload)
}

export const authAPIs = {
    login,
    logOut,
}