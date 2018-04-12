        import React from 'react';
        import ReactDOM from 'react-dom';
        // import Index from '../app/pages/home/home.jsx';
        import '../app/utils/setRem';
        import '../app/style/base.css';
        import Route from '../app/router/index';
        import FastClick from 'fastclick';
        import {Provider} from 'react-redux';
        import store from '../app/store/store';

        FastClick.attach(document.body);



        ReactDOM.render(
                <Provider store={store}>
                        <Route/>
                </Provider>,
                 document.getElementById('app')
        )
        
        // ReactDOM.render(
        //         <Route/>,
        //         document.getElementById('app')
        // )

        // ReactDOM.render([<Index key="Index"/>],document.getElementById('app'));