import {defineStore} from "pinia"
import axios from "axios";


export const orderApiStore = defineStore({
    id: 'orderApi',
    state: () => {
        return {
        }
    },
    actions: {
        getOrders: function () {
            return axios.get('http://localhost:3000/orders')
        },
        getOrder: function (id: number) {
            return axios.get(`http://localhost:3000/orders/${id}`)
        },
        storeOrder: function (data: any) {
            return axios.post('http://localhost:3000/orders', data)
        },
        updateOrder: function (id: number, data: any) {
            return axios.put(`http://localhost:3000/orders${id}`, data)
        },
        deleteOrder: function (id: number) {
            return axios.delete(`http://localhost:3000/orders${id}`)
        }
    },
});