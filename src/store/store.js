import axios from 'axios';
import { createStore } from 'vuex';

const token = import.meta.env.VITE_TOKEN;

const axiosInstance = axios.create({
    baseURL : `http://127.0.0.1:5173/api/v1/plants?token=${token}`,
})

export default createStore({

    state:{
        plantsList : []
    },
    getters:{

    },
    mutations:{

    },
    actions:{
        async getPlantsList(context)
        {
            try{
                console.log(axiosInstance);        
                const response = await axiosInstance.get();

                console.log('2', response.data);
                context.commit();

            } catch(error){
                console.log('error', error);
            }
        }
    }
})