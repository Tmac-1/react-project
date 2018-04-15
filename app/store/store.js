/*
 * @Author: Tmac-1 
 * @Date: 2018-04-12 17:04:07 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-15 17:04:24
 */
 
 import { createStore , combineReducers } from 'redux';
 import * as home from  './home/reducer';
 import * as production from './production/reducer';

 
 let store  =  createStore(
     combineReducers( {...home ,...production} )
 )

 export default store;