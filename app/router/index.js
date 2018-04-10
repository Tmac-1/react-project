import React from 'react';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom';

import Home from '../pages/home/home';
import Record from '../pages/record/record';
import Helpcenter from '../pages/helpcenter/helpcenter';
import Production from '../pages/production/production';
import Balance from '../pages/balance/balance';

class RouterConfig extends React.Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/record' component={Record}/>
                    <Route path='/helpcenter' component={Helpcenter}/>
                    <Route path='/production' component={Production}/>
                    <Route path='/balance' component={Balance}/>

                    <Redirect to='/'/>
                </Switch>
            </HashRouter>
        )
    }
}

export default RouterConfig;