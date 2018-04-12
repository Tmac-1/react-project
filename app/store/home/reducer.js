/*
 * @Author: Tmac-1 
 * @Date: 2018-04-12 21:58:46 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-12 23:07:48
 */

 import * as home from './action-type';

 let defaultState = {
     orderSum:'', // 金额
     name:'', //姓名
     phoneNO:'', //手机号
     imgpath:'', //图片地址
 }

 export const formData = ( state = defaultState , action ) =>{
    // return state;
    switch(action.type){
       case home.SAVEFORMDATA:
       return { ...state,name:'Tmac-1'};
       case home.SAVEIMG:
       return { ...state };
       case home.CLEARDATA:
       return { ...state };
       default:
       return state;
    }
 }