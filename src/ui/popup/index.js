import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createUIStore} from 'redux-webext';
import App from './App';

async function initApp() {
    const store = await createUIStore();
    // console.log(store.getState());
    const mountNode = document.createElement('div');
    document.body.appendChild(mountNode);

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        mountNode
    );
}

initApp();
