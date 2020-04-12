const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, message: 'hey hey hey', countLikes: 12},
    {id: 2, message: 'go go go', countLikes: 15},
    {id: 3, message: 'hi hi hi', countLikes: 2},
    {id: 4, message: 'ho ho ho', countLikes: 10},
  ],
  newPostText: 'it-kamasuta'
};

const profileReducer = (state = initialState, action)=> {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts,
          {
            id: 5,
            message: state.newPostText,
            countLikes: 0
          }]
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    default:
      return state;
  }
}

export const addPostActionCreator = ()=> ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text)=>
  ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;

