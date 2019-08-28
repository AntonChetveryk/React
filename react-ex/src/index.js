import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
 

/*ReactDOM.render(React.createElement('div', {className: 'red'}, React.createElement('a', {href: '#'}, 'about')), document.getElementById('root'));*/


ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();


