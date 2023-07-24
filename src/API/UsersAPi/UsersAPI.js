import { instance } from "../API"

export const getUsersAPI = async (currentPage, pageSize) => {
    const response = await instance.get(`users?page=${currentPage}&count=${pageSize}&totalCount=10`, {})
    return response.data

}


export const setUsersAPI = async (pageNumber, pageSize) => {
    const response = await instance.get(`users?page=${pageNumber}&count=${pageSize}&totalCount=10`, {})
    return response.data
}