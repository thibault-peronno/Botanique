import axios from 'axios';
import { createStore } from 'vuex';

const token = import.meta.env.VITE_TOKEN;

const axiosInstance = axios.create({
    baseURL : `/api/v1/plants`,
})

export default createStore({

    state:{
        plantsList : [],
        currentPlant : [],
        pages : 1
    },
    getters: {
        isSkeleton(state) {
            return state.plantsList.data === undefined ? true : false;
          }
    },
    mutations:{
        getPlantsListMutation(state, listData){
            // console.log(state.plantsList.data);
            state.plantsList = listData;
        },
        getPlantByIdMutation(state, plantData){
            // console.log(state.currentPlant, plantData);
            state.currentPlant = plantData;
        },
        updatePagesMutation(state, countPages){
            // console.log(countPages);
            state.pages += countPages;
            // console.log(countPages,  state.pages);
        },
        backPageMutation(state, numberPage){
            state.pages = Number(numberPage);
        }
    },
    actions:{
        async getPlantsList(context)
        {
            this.state.plantsList.data = undefined;
            try{   
                const response = await axiosInstance.get(`?token=${token}&page=${this.state.pages}`);
                // const response = await axiosInstance.get(`?token=${token}`);

                // console.log('2', response.data);
                context.commit('getPlantsListMutation', response.data);

            } catch(error){
                // console.log('error', error);
            }
        },
        async getPlantById(context, idPlant){
            try{
                // console.log('getPlantById');
                const response = await axiosInstance.get(`${idPlant}/?token=${token}`);
                context.commit('getPlantByIdMutation', response.data)
            } catch(error){
                console.log('plant by id error', error);
            }
        },
        updatePages(context, event){
            // console.log('updatePages');
            if(event == 'previous'){
                console.log('-1');
                context.commit('updatePagesMutation', -1);
            }
            else {
                context.commit('updatePagesMutation', 1);
            }
        },
        backPage(context, backPage){
            context.commit('backPageMutation', backPage);
        }
    }
})