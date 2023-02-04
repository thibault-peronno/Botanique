import axios from 'axios';
import { createStore } from 'vuex';

const token = import.meta.env.VITE_TOKEN;

const axiosInstance = axios.create({
    baseURL : `/api/v1/plants?token=${token}`,
})

export default createStore({

    state:{
        plantsList : []
    },
    getters:{

    },
    mutations:{
        getPlantsListMutation(state, listData){
            state.plantsList = listData;
        }

    },
    actions:{
        async getPlantsList(context)
        {
            try{   
                const response = await axiosInstance.get();

                // console.log('2', response.data);
                context.commit('getPlantsListMutation', response.data);

            } catch(error){
                // console.log('error', error);
            }
        }
    }
})