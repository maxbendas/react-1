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
            newMessageText: 'message',
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
            message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                countLikes: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }


}

export default store;
window.store = store;
