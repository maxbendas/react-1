const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action)=> {

  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages,
          {
            id: 4,
            message: body
          }]
      }
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      }
    default:
      return state;
  }
}

export const sendMessageCreator = ()=>({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body)=>
  ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer;

