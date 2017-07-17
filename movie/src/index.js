import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

//引入store
import store from './redux/store.js';
// 需要引入 react-redux
import {
	Provider
} from 'react-redux';

function render() {
	ReactDOM.render(
		<Provider store={store}>
        	<Main />
   		</Provider>,
		document.getElementById('root'));
}
render();
store.subscribe(render);
registerServiceWorker();