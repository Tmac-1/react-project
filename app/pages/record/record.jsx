import React from 'react';
import PublicHeader from '../../components/header/header';

class Record extends React.Component{

    render(){
        return(
            <main className='common-con-top'>
                <PublicHeader title='记录'/>
                 <div>这是记录中心</div>
            </main>
          
        )
    }

}

export default Record;