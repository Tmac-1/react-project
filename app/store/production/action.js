/*
 * @Author: Tmac-1 
 * @Date: 2018-04-15 16:17:49 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-15 17:20:25
 */

import * as pro from './action-type';

//编辑商品
export const editPro = (index,selectNum) =>{
    return {
        type:pro.EDITPRODUCTION,
        index,
        selectNum
    }
}