import React, { useState } from 'react';
import GridNotes from './GridNotes';
import AddNotePopup from '../AddNote/AddNotePopup';
import './notes.css';

let Notes = ({ popupActive, setPopupActive, notes, getAddNoteData,
    setEditNote }) => {

    const clickHandler = (e) => {
        e.preventDefault();
        setPopupActive(true);
    }

    return <div>
        <div className="overinput">
            <input onClick={clickHandler} type="submit" value="Добавить заметку" />
        </div>
        <div className="grid">
            {notes.map((e, index) => <GridNotes note={e}
                setEditNote={setEditNote}
                key={index}
            />)}
        </div>
        <AddNotePopup popupActive={popupActive}
            setPopupActive={setPopupActive}
            getAddNoteData={getAddNoteData}
        />

    </div >
}

export default Notes;