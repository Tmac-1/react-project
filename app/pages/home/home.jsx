/*
 * @Author: Tmac-1 
 * @Date: 2018-04-05 12:11:47 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-06 23:13:06
 */

 import React from 'react';
 import PubicHeader from '../../components/header/header';
 import './home.less';

 class Index extends React.Component{
    render(){
        return(
            <div>
                 <PubicHeader />
                 <div className='content'>这是内容</div>
            </div>
        )
    }

 }

 export default Index;