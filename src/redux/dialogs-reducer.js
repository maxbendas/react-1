const SEND_MESSAGE = 'SEND-MESSAGE';

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
  ]
};

const dialogsReducer = (state = initialState, action)=> {

  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages,
          {
            id: 4,
            message: body
          }]
      }

    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody)=>({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;

