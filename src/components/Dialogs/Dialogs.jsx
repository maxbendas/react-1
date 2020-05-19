import React from "react";
import s from "./Dialogs.module.css";
import {Redirect} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);

  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage()
  }

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body)
  }

  if(!props.isAuth)return <Redirect to={"/login"}/>;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea onChange={onNewMessageChange}
                    placeholder="Enter your message"
                    //ref={newMessageElement}
                    value={newMessageBody}/>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;