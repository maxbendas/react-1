import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Max</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Valera</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Kolya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Jenya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Igor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Serge</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Yo</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Hey</div>
                <div className={s.message}>Go</div>
                <div className={s.message}>Yes</div>
            </div>
        </div>
    )
}

export default Dialogs;