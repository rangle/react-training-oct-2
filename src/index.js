import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const users = [
  {
    uid: 1,
    name: 'Alice X',
    email: 'alice@test.com',
  },
  {
    uid: 2,
    name: 'John X',
    email: 'john@test.com',
  },
  {
    uid: 3,
    name: 'Bob X',
    email: 'bob@test.com',
  },
];

setTimeout(() => {
  users.push({
    uid: 4,
    name: 'FDSf X',
    email: 'bosdb@test.com',
  });
  console.log(users);
}, 3000);

ReactDOM.render(<App users={users} />, document.getElementById('root'));
registerServiceWorker();
