/*
 * @Author: Tmac-1 
 * @Date: 2018-04-15 16:17:49 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-18 01:11:13
 */

import * as pro from './action-type';
import API from '../../api/api';


// 初始化获取商品数据，保存至redux
export const getProData = () =>{
      // 返回函数，异步dispatch
      return async dispatch =>{
          try{
              let result = await API.getProduction();
              result.map(item =>{
                  item.selectStatus =false;
                  item.selectNum =0;
                  return item;
              })

              dispatch({
                  type:pro.GETPRODUCTION,
                  dataList:result,
              })
          }catch(err){
              console.error(err)
          }
      }
}


//编辑商品
export const editPro = (index,selectNum) =>{
    return {
        type:pro.EDITPRODUCTION,
        index,
        selectNum
    }
}

// 选择商品
export const togSelectPro = index =>{
    return {
        type:pro.TOGGLESELECT,
        index
    }
}