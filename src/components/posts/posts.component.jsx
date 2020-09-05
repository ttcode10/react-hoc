import React from 'react';

import WithData from './../../with-data';

const Posts = ({data}) => (
  <div className='container'>
    <h1>Posts</h1>
    {data.map(post => (
      <div className='post' key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))}
  </div>
);

export default WithData(Posts);
