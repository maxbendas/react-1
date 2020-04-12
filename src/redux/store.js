import profileReducer from  "./profile-reducer";
import dialogsReducer from  "./dialogs-reducer";
import sidebarReducer from  "./sidebar-reducer";

let store = {
  _state: {
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
      newMessageBody: 'message',
    },
    sidebar: {
      friends: [
        {name: 'Tolya'},
        {name: 'Kolya'},
        {name: 'Vitya'}
      ]
    },
  },
  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer; // наблюдатель
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      countLikes: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 4,
      message: this._state.dialogsPage.newMessageBody
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageBody = '';
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageBody = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }

}

export default store;
window.store = store;
