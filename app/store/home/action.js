/*
 * @Author: Tmac-1 
 * @Date: 2018-04-12 22:28:54 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-12 22:35:50
 */

 import * as home from './action-type';

 //保存表单数据
 export const saveFormData = (value,datatype) =>{
    return {
        type:home.SAVEFORMDATA,
        value,
        datatype,
    }
 } 

 // 保存图片地址
 export const saveImg =  path =>{
     return {
         type:home.SAVEIMG,
         path,
     }
 }  

 // 保存图地址
 export const  clearData = () => {
     return {
         type:home.CLEARDATA
     }
 }