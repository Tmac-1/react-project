/*
 * @Author: Tmac-1 
 * @Date: 2018-04-05 12:05:06 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-10 18:33:33
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
   FirstChild(props){
       const childrenArray = React.Children.toArray(props.children)
       return childrenArray[0] || null;
   }

    render(){
        return(
            <header className='header-container'>
                <span className='header-slide-icon iconfont icon-caidan' onClick={this.toggleNav}></span>
                <span className='header-title'>{this.props.title}</span>
                <span className='header-link iconfont icon-5'></span>   
                
              <ReactCSSTransitionGroup
                component={this.FirstChild}
                transitionName="nav"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
                  {
                this.state.navState &&   <aside key='nav-slide' className='nav-slide-list' onClick={this.toggleNav}>
                          
                       <NavLink to='/' exact className='nav-link icon-jia'>首页</NavLink>
                       <NavLink to='/balance' className='nav-link icon-jia'>提现</NavLink>
                       <NavLink to='/helpcenter' className='nav-link icon-jia'>帮助中心</NavLink>

                                         </aside>    
                  }
              </ReactCSSTransitionGroup>
                

            </header>
        )
    }
 }

 export default PublicHeader;