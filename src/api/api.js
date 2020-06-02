import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "442f2127-1f99-4f4e-a017-f914dc25f907"
    }
})

export const usersApi = {
    getUsers(currentPage=1, pageSize=10){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
        return response.data
    })
},
    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        console.warn('Obsolete method. Please profileAPI object.');
        return profileApi.getProfile(userId)
    }
}

export const profileApi = {
    getProfile(userId){
        return instance.get(`profile/` + userId)
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
    },

}

export const authApi = {
    me (){
        return instance.get(`auth/me`)
    },
    login (email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout (){
        return instance.delete(`auth/login`)
    },
}