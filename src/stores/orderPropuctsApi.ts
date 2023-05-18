import {defineStore} from "pinia"
import axios from "axios";


export const orderProductApiStore = defineStore({
    id: 'orderProductApi',
    state: () => {
        return {
        }
    },
    actions: {
        storeOrderProduct: function (data: any) {
            return axios.post('http://localhost:3000/order-products', data)
        },
    },
});