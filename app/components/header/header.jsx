/*
 * @Author: Tmac-1 
 * @Date: 2018-04-05 12:05:06 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-09 17:27:21
 */

 import React from 'react';
 import {NavLink} from 'react-router-dom';
 import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
 import './header.less';

 class PublicHeader extends React.Component{
   constructor(props){
       super(props)
       this.state={
           navState:false
       }
       this.toggleNav = this.toggleNav.bind(this)
   }
   
   //切换左侧导航栏状态
   toggleNav(){
       this.setState({ navState:!this.state.navState })
   }
   

    render(){
        return(
            <header className='header-container'>
                <span className='header-slide-icon iconfont icon-caidan' onClick={this.toggleNav}></span>
                <span className='header-title'>首页</span>
                <span className='header-link iconfont icon-5'></span>   
                
              <ReactCSSTransitionGroup
                component='aside'
                transitionName="nav"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
                  {
                this.state.navState &&   <aside key='nav-slide' className='nav-slide-list'>
                                              <p className='nav-link icon-jia'>首页</p>
                                              <p className='nav-link icon-jia'>提现</p>
                                              <p className='nav-link icon-jia'>帮助中心</p>
                                         </aside>    
                  }
              </ReactCSSTransitionGroup>
                

            </header>
        )
    }
 }

 export default PublicHeader;