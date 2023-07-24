import { instance } from "../API"

export const unFollowAPI = async (id) => {
    const response =await instance.delete(`follow/${id}`)
    return response

}
export const FollowAPI = async (id) => {
    const response = await instance.post(`follow/${id}`, {})
    return response
}
