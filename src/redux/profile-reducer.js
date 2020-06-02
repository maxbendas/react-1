import {usersApi, profileApi} from '../../src/api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    {id: 1, message: 'hey hey hey', countLikes: 12},
    {id: 2, message: 'go go go', countLikes: 15},
    {id: 3, message: 'hi hi hi', countLikes: 2},
    {id: 4, message: 'ho ho ho', countLikes: 10},
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action)=> {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts,
          {
            id: 5,
            message: action.newPostText,
            countLikes: 0
          }]
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    case SET_USER_PROFILE:
      return {...state, profile: action.profile}

    default:
      return state;
  }
}

export const addPostActionCreator = (newPostText)=> ({type: ADD_POST, newPostText})

export const setUserProfile = (profile)=>({type: SET_USER_PROFILE, profile})

export const setStatus = (status)=>({type: SET_STATUS, status})

export const getUserProfile = (userId)=> {
  return (dispatch)=>{
    usersApi.getProfile(userId).then(response=> {
          dispatch(setUserProfile(response.data));
        });
  }
}

export const getStatus = (userId)=> {
  return (dispatch)=>{
    profileApi.getStatus(userId).then(response=> {

      dispatch(setStatus(response.data));
    });
  }
}

export const updateStatus = (status)=> {
  return (dispatch)=>{
    profileApi.updateStatus(status).then(response=> {
      if (response.data.resultCode === 0){
        dispatch(setStatus(status));
      }
    });
  }
}

export default profileReducer;

