import axios from 'axios';
import dayjs from 'dayjs';
import { createStore } from 'vuex';

import customParseFormat from 'dayjs/plugin/customParseFormat';
/*
npm run build
firebase deploy --only hosting
 */
// const token = import.meta.env.VITE_TOKEN;


const axiosConfig = {
    method: 'GET',
    mode: 'no-cors',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Origin' : '*'
    },
    withCredentials: false,
}

const axiosInstance = axios.create({
    baseURL: `https://trefle.io/api/v1/plants`,
    params: {
        token: localStorage.getItem('token'),
    },
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
        last: ''
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
            // ------ Auth ------ //

            dayjs.extend(customParseFormat)
            // console.log(currentLimit);
            const dayJs = localStorage.getItem('expiration') ? Date.parse(dayjs(localStorage.getItem('expiration'), "MM-DD-YYYY HH:mm", 'fr')) : false;
            // console.log(Date.parse(dayJs.$d));
            const date = new Date();
            const formatDate = Date.parse(date)
            // console.log(formatDate);
            // console.log(Date.parse(localStorage.getItem('expiration')))
            if (!localStorage.getItem('token') || (dayJs > formatDate)) {
                try {
                    console.log('auth token');
                    const response = await axios.get('http://localhost:5000/trefle', axiosConfig);
                    console.log(response.data);
                    const dataToken = response.data;
                    this.state.token = dataToken.token;
                    axiosInstance.defaults.params.token = dataToken.token;
                    let limit = JSON.stringify(dataToken.expiration);
                    localStorage.setItem('token', this.state.token);
                    localStorage.setItem('expiration', limit);
                } catch (error) {
                    // console.log('error', error.message, error.toJSON());
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                }


            }
            // ------ /Auth ------ //

            // ----- fetch data ----- //
            // console.log(localStorage.getItem('token'));
            this.state.plantsList.data = undefined;
            console.log('get plant list')
            try {
                console.log('1');
                const response = await axiosInstance.get(`?page=${this.state.pages}`, axiosConfig);
                // const response = await axiosInstance.get(`?page=${this.state.pages}&token=${token}`);

                console.log('2', response.data);
                context.commit('getPlantsListMutation', response.data);

            } catch (error) {
                // console.log('error', error.message, error.toJSON());
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            }
            // ----- /fetch data ----- //
        },
        async getPlantById(context, idPlant) {
            try {
                // console.log('getPlantById');
                const response = await axiosInstance.get(`${idPlant}`);
                context.commit('getPlantByIdMutation', response.data)
            } catch (error) {
                console.log('plant by id error', error);
                const response = await axiosInstance.get(`${idPlant}`);
                context.commit('getPlantByIdMutation', response.data)
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