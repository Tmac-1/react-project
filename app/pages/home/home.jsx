/*
 * @Author: Tmac-1 
 * @Date: 2018-04-05 12:11:47 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-12 22:55:22
 */

 import React from 'react';
 import PubicHeader from '../../components/header/header';
 import { connect } from 'react-redux';
 import { saveFormData , saveImg , clearData } from '../../store/home/action';

 import './home.less';

 class Home extends React.Component{
    render(){
        return(
            <main className='home-container'>
                  <PubicHeader title='首页'/>
                  <p className='common-title'>请录入您的信息</p>
                  <form className='home-form'>
                       <div className='home-form-item'>
                           <span>销售金额：</span>
                           <input type="text" placeholder='请输入订单金额'/>
                       </div>
                       <div className='home-form-item'>
                            <span>客户姓名：</span>
                            <input type="text" placeholder='请输入客户姓名'/>
                       </div>
                       <div className='home-form-item'>
                            <span>客户电话：</span>
                            <input type="text" placeholder='请输入客户'/>
                       </div>
                  </form>

                  <div>
                      <p className='common-title'>请选择销售的产品</p> 
                      <div className='common-select-btn'>
                          选择产品
                      </div>
                  </div>

                  <div className='upload-img-con'>
                      <p className='common-title'>请上传发票凭据</p>
                      <div>
                          <span className='common-select-btn'>上传图片</span>
                      </div>
                  </div>

                  <div className='submit-btn'>提交</div>

            </main>
        )
    }

 }

 export default connect(
     state =>({
         formData:state.formData,
         proData:state.proData,
     }),
     {
        saveFormData,
        saveImg,
        clearData
     }
 )(Home);