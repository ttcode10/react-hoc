import React from 'react';
import './App.scss';

import Users from './components/users/users.component';
import Posts from './components/posts/posts.component';

function App() {
  return (
    <div className='App'>
      <Users dataSource='https://jsonplaceholder.typicode.com/users' />
      <Posts dataSource='https://jsonplaceholder.typicode.com/posts' />
    </div>
  );
}

export default App;
