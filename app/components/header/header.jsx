/*
 * @Author: Tmac-1 
 * @Date: 2018-04-05 12:05:06 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-09 00:59:04
 */

 import React from 'react';
 import {NavLink} from 'react-router-dom';
 import './header.less';

 class PublicHeader extends React.Component{

    render(){
        return(
            <header className='header-container'>
                <span className='header-slide-icon iconfont icon-caidan'></span>
                <span className='header-title'>首页</span>
                <span className='header-link iconfont icon-5'></span>   
          
            </header>
        )
    }
 }

 export default PublicHeader;