/* APIModule.store.js */

import axios from 'axios'
import jwt_decode from 'jwt-decode'


const url = "APIurl...../api";
// State object
const state = {
  url,
  access: localStorage.getItem('access_token'),
  refresh: localStorage.getItem('refresh_token'),
  endpoints: {
    pairJWT: url+'/token/',
    refreshJWT: url+'/token/refresh/',
  },
  APIMessage: null,
  cities: null,
}

// Mutations
const mutations = {
  updateAccessToken(state, newToken){
    localStorage.setItem('access_token', newToken);
    state.access = newToken;
  },
  updateRefreshToken(state, newToken){
    localStorage.setItem('refresh_token', newToken);
    state.refresh = newToken;
  },
  updateCities(state, cities){
    state.cities = cities;
  },
  removeTokens(state){
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    state.access = null;
    state.refresh = null;
  },
  setAPIMessage(state, message){
    state.APIMessage = message;
  }
}

//actions functions
const actions = {
  obtainJWTPair({commit}, payload){

    //reset API message
    commit("setAPIMessage", null);

    return axios.post(state.endpoints.pairJWT, payload, { useCredentails: true })
      .then(response => {
        commit('updateAccessToken', response.data.access);
        commit('updateRefreshToken', response.data.refresh);
      })
      .catch(error => {
        if (error.response.status == 401){
          commit('setAPIMessage', error.response.data.detail);
        }
        commit('removeTokens');
      });
  },
  refreshToken({commit}, payload){
    
    //reset API message
    commit("setAPIMessage", null);

    return axios.post(state.endpoints.refreshJWT, payload)
      .then(response => {
        commit('updateAccessToken', response.data.access);
      })
      .catch(error => {
        if (error.response.status == 401){
          commit('setAPIMessage', error.response.data.detail);
        }
        commit('removeTokens');
      });
  },
  checkTokens({dispatch}){
    return new Promise((resolve) =>{
      if (state.refresh){
        const refresh = jwt_decode(state.refresh);
        const access = jwt_decode(state.access);
  
        //if refresh token has NOT expired or will NOT expire in 5 minutes
        if (refresh.exp - (Date.now()/1000) > 300){
  
          //if access token will expire in 30 segs or has expired refresh it!
          if (access.exp - (Date.now()/1000) < 30){
            dispatch('refreshToken', {"refresh": state.refresh}).then(() =>{
              resolve();
            });
          }else{
            resolve();
          }
        //if refresh token has expired or will expire in 5 minutes
        }else if (refresh.exp - (Date.now()/1000) < 300){
          dispatch('removeTokens').then(() =>{
            resolve();
          });
        }
      }else{
        console.log("no session tokens");
        resolve();
      }
    });
  },
  removeTokens({commit}){
    commit('removeTokens');
  },
  obtainCities({ commit }) {
    
    //reset API message
    commit("setAPIMessage", null);

    return axios.get(state.endpoints.cities)
      .then(response => {
        commit('updateCities', response.data);
      })
      .catch(error => {
        if (error.response.data){
          commit('setAPIMessage', error.response.data);
        }
      });
  }

}

// Getter functions
const getters = {
  getUrl(state) {
    return state.url;
  },
  getAPIMessage(state){
    return state.APIMessage;
  },
  getAccessToken(state){
    return state.access;
  },
  getRefreshToken(state){
    return state.refresh;
  },
  getCities(state){
    return state.cities;
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}