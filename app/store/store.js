/*
 * @Author: Tmac-1 
 * @Date: 2018-04-12 22:08:19 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-12 23:26:01
 */

 import { createStore , combineReducers } from 'redux';
 import * as home from './home/reducer';
//  import * as production from './production/reducer'

 let store = createStore(
    //  home
    combineReducers({ ...home }),
 )

 export default store;