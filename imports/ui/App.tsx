import React from 'react';
import { Hello } from './Hello';
import { Info } from './Info';
import { Post } from './Post';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello />
    <Info />
    <Post />
  </div>
);
