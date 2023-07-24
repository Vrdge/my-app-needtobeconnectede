import { instance } from "./API"



export const getProfileUserAPI = async (userId) => {
    const response = await instance.get(`profile/${userId}`)
    return response.data
}
export const getStatusAPI = async (userId) => {

    const response = await instance.get(`profile/status/${userId}`)
    return response.data
}
export const updateStatusAPI = async (status) => {

    const response = await instance.put(`profile/status/`, { status: status })
    return response.data
}