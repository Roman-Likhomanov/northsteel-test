import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../Notes/notes.css';

const EditNote = ({ editNote, notes, setNotes }) => {
    const navigate = useNavigate();

    const [nameEditNote, setNameEditNote] = useState(editNote.name);
    const [descriptionEditNote, setDescriptionEditNote] = useState(editNote.description);

    const STORE_KEY = 'STORE_KEY';

    const submitHandler = (e) => {
        e.preventDefault();
        let newNote = {
            "name": nameEditNote,
            "description": descriptionEditNote,
        }

        const copyNotes = notes.concat();
        const index = copyNotes.indexOf(editNote);
        if (index !== -1) {
            copyNotes[index] = newNote;
        }
        setNotes(copyNotes);
        localStorage.setItem(STORE_KEY, JSON.stringify(copyNotes));
        navigate('/');
    }

    const cancelHandler = (e) => {
        e.preventDefault();
        navigate('/');
    }

    const deleteHandler = (e) => {
        e.preventDefault();
        const copyNotes = notes.concat();
        const index = copyNotes.indexOf(editNote);
        if (index !== -1) {
            copyNotes.splice(index, 1);
        }
        setNotes(copyNotes);
        localStorage.setItem(STORE_KEY, JSON.stringify(copyNotes));
        navigate('/');
    }

    return (
        <div>
            <form className="formEdit" >
                <input value={nameEditNote} onChange={(event) => { setNameEditNote(event.target.value) }} className="headingEdit" type="text" />
                <textarea value={descriptionEditNote} onChange={(event) => { setDescriptionEditNote(event.target.value) }} className="descriptionEdit" type="text"></textarea>
                <input onClick={submitHandler} type="submit" value="Сохранить редактирование" />
                <input onClick={cancelHandler} type="submit" value="Отменить редактирование" />
                <input onClick={deleteHandler} type="submit" value="Удалить заметку" />
            </form>
        </div>
    )
}

export default EditNote;

