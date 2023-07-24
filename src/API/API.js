import axios from "axios";
export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": '8d18fc6e-e1a6-42af-8c10-06df3ae5bcee'

    }
})



export const AuthAPI = {
        async me() {
            const response = await instance.get(`auth/me`);
        return response;
        },
        async login( email, password, rememberMe){
            const response = await instance.post(`auth/login`, { email, password, rememberMe });
            return response;
        
        },
        async logOut(){
            const response = await instance.delete(`auth/login`);
            return response;
        
        }
}




























export const isAuthAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}


// 

