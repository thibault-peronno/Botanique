import axios from 'axios';
import { createStore } from 'vuex';
/*
npm run build
firebase deploy --only hosting
 */
const token = import.meta.env.VITE_TOKEN;

const axiosInstance = axios.create({
    baseURL: `https://trefle.io/api/v1/plants`,
})

export default createStore({

    state: {
        plantsList: [],
        currentPlant: [],
        pages: 1,
        self: '',
        first: '',
        prev: '',
        next: '',
        last: '',
    },
    getters: {
        isSkeleton(state) {
            return state.plantsList.data === undefined ? true : false;
        },
        isSelf(state) {
            return state.self;
        },
        isFirst(state) {
            return state.first;
        },
        isPrev(state) {
            return state.prev;
        },
        isNext(state) {
            return state.next;
        },
        isLast(state) {
            return state.last;
        }
    },
    mutations: {
        getPlantsListMutation(state, listData) {
           
            state.plantsList = listData;

            state.total = Number(listData.meta.total);
            state.self = listData.links.self.slice(20);
            state.first = listData.links.first.slice(20);
            state.next = listData.links.next === undefined ? '' : listData.links.next.slice(20);
            state.last = listData.links.last.slice(20);
            state.prev = listData.links.prev === undefined ? '' : listData.links.prev.slice(20);

        },
        getPlantByIdMutation(state, plantData) {
            // console.log(state.currentPlant, plantData);
            state.currentPlant = plantData;
        },
        updatePagesMutation(state, countPages) {
            // console.log(countPages);
            state.pages = countPages;
            // console.log(countPages,  state.pages);
        },
        backPageMutation(state, numberPage) {
            state.pages = Number(numberPage);
        }
    },
    actions: {
        async getPlantsList(context) {
            this.state.plantsList.data = undefined;
            try {
                const response = await axiosInstance.get(`?page=${this.state.pages}&token=${token}`);
                // const response = await axiosInstance.get(`?token=${token}`);

                console.log('2', response.data);
                context.commit('getPlantsListMutation', response.data);

            } catch (error) {
                console.log('error', error.message);
            }
        },
        async getPlantById(context, idPlant) {
            try {
                // console.log('getPlantById');
                const response = await axiosInstance.get(`${idPlant}/?token=${token}`);
                context.commit('getPlantByIdMutation', response.data)
            } catch (error) {
                console.log('plant by id error', error);
            }
        },
        updatePages(context, page) {
            console.log('updatePages', page);

            context.commit('updatePagesMutation', page);

        },
        backPage(context, backPage) {
            context.commit('backPageMutation', backPage);
        }
    }
})