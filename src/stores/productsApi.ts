import {defineStore} from "pinia"
import axios from "axios";


export const productApiStore = defineStore({
    id: 'productApi',
    state: () => {
        return {
        }
    },
    actions: {
        getProducts: function () {
            return axios.get('http://localhost:3000/products')
        },
        getProduct: function (id: number) {
            return axios.get(`http://localhost:3000/products/${id}`)
        },
        storeProduct: function (data: any) {
            return axios.post('http://localhost:3000/products', data)
        },
        updateProduct: function (id: number, data: any) {
            return axios.put(`http://localhost:3000/products${id}`, data)
        },
        deleteProduct: function (id: number) {
            return axios.delete(`http://localhost:3000/products${id}`)
        }
    },
});