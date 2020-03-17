import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Dialogs from "./components/Dialogs/Dialogs";

let posts = [
  {id: 1, message: 'hey hey hey', countLikes: 12},
  {id: 2, message: 'go go go', countLikes: 15},
  {id: 3, message: 'hi hi hi', countLikes: 2},
  {id: 4, message: 'ho ho ho', countLikes: 10},
];

let dialogs = [
  {id: 1, name: 'Max'},
  {id: 2, name: 'Valera'},
  {id: 3, name: 'Kolya'},
  {id: 4, name: 'Jenya'},
  {id: 5, name: 'Igor'},
  {id: 6, name: 'Serge'},
]

let messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'Yo'},
  {id: 3, message: 'Hello'}
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
