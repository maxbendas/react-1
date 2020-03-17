import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

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

  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

  let messagesElements = messages.map(m => <Message message={m.message}/>);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;