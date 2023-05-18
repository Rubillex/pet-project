import {defineStore} from "pinia"
import axios from "axios";


export const userApiStore = defineStore({
    id: 'userApi',
    state: () => {
        return {
        }
    },
    actions: {
        getUsers: function () {
            return axios.get('http://localhost:3000/users')
        },
        getUser: function (id: number) {
            return axios.get(`http://localhost:3000/users/${id}`)
        },
        storeUser: function (data: any) {
            return axios.post('http://localhost:3000/users', data)
        },
        updateUser: function (id: number, data: any) {
            return axios.put(`http://localhost:3000/users${id}`, data)
        },
        deleteUser: function (id: number) {
            return axios.delete(`http://localhost:3000/users${id}`)
        }
    },
});