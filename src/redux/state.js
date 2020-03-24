import {rerenderEntireTree} from "../render";

let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'hey hey hey', countLikes: 12},
      {id: 2, message: 'go go go', countLikes: 15},
      {id: 3, message: 'hi hi hi', countLikes: 2},
      {id: 4, message: 'ho ho ho', countLikes: 10},
    ],
    newPostText: 'it-kamasuta'
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Max'},
      {id: 2, name: 'Valera'},
      {id: 3, name: 'Kolya'},
      {id: 4, name: 'Jenya'},
      {id: 5, name: 'Igor'},
      {id: 6, name: 'Serge'},
    ],
    messages: [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'Yo'},
      {id: 3, message: 'Hello'}
    ],
    newMessageText: 'message',
  },
  sidebar: {
    friends: [
      {name:'Tolya'},
      {name:'Kolya'},
      {name:'Vitya'}
  ]
  },
}

window.state=state;

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    countLikes: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export let addMessage = () => {
  let newMessage = {
    id: 4,
    message: state.dialogsPage.newMessageText
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
}

export default state;
