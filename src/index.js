import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( < App / > , document.getElementById('root'));




{
    /* function reducer(state = initialstate, action) {
        console.log("reducer", state, action);
        return state;
    }

    const store = createStore(reducer); */
}



serviceWorker.unregister();