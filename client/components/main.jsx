import React from 'react';
import ReactDOM from 'react-dom';
import RepeatModule from './list-post.jsx';

// React render data to div with id posts-div
ReactDOM.render(
  <RepeatModule />,
  document.getElementById('posts-div')
);

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
