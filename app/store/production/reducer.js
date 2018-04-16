/*
 * @Author: Tmac-1 
 * @Date: 2018-04-14 23:41:49 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-16 10:13:49
 */
import * as pro from './action-type';
import Immutable from 'immutable';

 let defaultState ={
    /**
     * 商品数据
     * exmple:[{
     *   product_id:1,  商品ID
     *   product_name:"PaiBot(2G/32G)",  商品名称
     *   commission:200 , 佣金
     *   selectStatus:false, 是否选择
     *   selectNum:0, 选择数量
     * }]
    **/  
    dataList:[{
         product_id:1, 
         product_name:"PaiBot(2G/32G)", 
         commission:200 , 
         selectStatus:false, 
         selectNum:0, 
       },
       {
        product_id:2, 
        product_name:"PaiBot(2G/64G)", 
        commission:200 , 
        selectStatus:false, 
        selectNum:0, 
      }
    ]
 }

 export const proData = (state = defaultState ,action) =>{
    let imuDataList;
    let imuItem;

    switch(action.type){
       case pro.TOGGLESELECT:
       //避免引用类型数据，使用immutable进行数据转换 
       imuDataList = Immutable.List(state.dataList);
       imuItem = Immutable.Map(state.dataList[action.index]);
       imuItem = imuItem.set('selectStatus',!imuItem.get('selectStatus'));
       imuDataList = imuDataList.set(action.index,imuItem);
       return{...state ,...{dataList:imuDataList.toJS()}}
       case pro.EDITPRODUCTION:
       //避免引用类型数据，使用immutable进行数据转换 
       imuDataList = Immutable.List(state.dataList);  // 类似于数组
       imuItem = Immutable.Map(state.dataList[action.index]);  //类似于对象
       imuItem = imuItem.set('selectNum',action.selectNum);
       imuDataList = imuDataList.set(action.index,imuItem)
        // redux必须返回一个新的state
       return {...state,...{dataList:imuDataList.toJS()} };
       default:
       return state;
    }

}
