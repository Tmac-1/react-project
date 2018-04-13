/*
 * @Author: Tmac-1 
 * @Date: 2018-04-12 17:04:07 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-13 14:59:05
 */
 
 import { createStore , combineReducers } from 'redux';
 import * as home from  './home/reducer';

 
 let store  =  createStore(
     combineReducers( {...home} )
 )

 export default store;