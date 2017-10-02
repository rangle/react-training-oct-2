import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

function fullName(first, last) {
  return `${last}, ${first}`;
}

const Greeting = ({ first, last, age, others }) => (
  <header>
    <h1 className="red f1">Hello {fullName(first, last) + '!!'}</h1>
    <div>age {age}!</div>
  </header>
);

const user = { first: 'Alice', last: 'X', age: 33 };

ReactDOM.render(
  <Greeting {...user} age={45} />,
  document.getElementById('root'),
);
registerServiceWorker();
