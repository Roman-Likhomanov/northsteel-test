import React, { useState } from "react";
import '../Notes/notes.css';

const AddNotePopup = ({popupActive, setPopupActive, getAddNoteData}) => {

    const [nameNote, setNameNote] = useState('');
    const [descriptionNote, setDescriptionNote] = useState('');

    const closeHandler = (e) => {
        e.preventDefault();
        setPopupActive(false);
        setNameNote('');
        setDescriptionNote('');
    }

    const submitHandler = (e) => {
        e.preventDefault();
        getAddNoteData(nameNote, descriptionNote);
        closeHandler(e);
    }

    return (
        <div className={popupActive ? "popup active" : "popup"} onClick={closeHandler}>
            <div className={popupActive ? "popup__content active" : "popup__content"} onClick={e => e.stopPropagation()}>
                <form onSubmit={submitHandler} className="popup__form">
                <input value={nameNote} onChange={(event)=>{setNameNote(event.target.value)}} className="heading" type="text" placeholder="Заголовок"/>
                <textarea value={descriptionNote} onChange={(event)=>{setDescriptionNote(event.target.value)}} className="description" type="text" placeholder="Описание"></textarea>
                    <input type="submit" value="Добавить" />
                </form>
            </div>
        </div>
    )
}

export default AddNotePopup;