import axios from 'axios';
import { createStore } from 'vuex';

const token = import.meta.env.VITE_TOKEN;

const axiosInstance = axios.create({
    baseURL : `/api/v1/plants`,
})

export default createStore({

    state:{
        plantsList : [],
        currentPlant : []
    },
    getters:{

    },
    mutations:{
        getPlantsListMutation(state, listData){
            state.plantsList = listData;
        },
        getPlantByIdMutation(state, plantData){
            console.log(state.currentPlant, plantData);
        }

    },
    actions:{
        async getPlantsList(context)
        {
            try{   
                const response = await axiosInstance.get(`?token=${token}`);

                // console.log('2', response.data);
                context.commit('getPlantsListMutation', response.data);

            } catch(error){
                // console.log('error', error);
            }
        },
        async getPlantById(context, idPlant){
            try{
                const response = await axiosInstance.get(`${idPlant}/?token=${token}`);
                context.commit('getPlantByIdMutation', response.data)
            } catch(error){
                console.log('plant by id error', error);
            }
        }
    }
})