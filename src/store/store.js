
/*!
Coded by Inverdynamic Team
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** store/index.js **/
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import APIModule from './modules/APIModule.store'

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
   modules: {
      APIModule,
   },
   strict: debug,
   plugins: debug? [ createLogger() ] : [],
})