import React from "react";
import './notes.css';
import { useNavigate } from 'react-router-dom';

let GridNotes = ({ note, setEditNote }) => {
    const navigate = useNavigate();

    const clickNoteHandler = (e) => {
        e.preventDefault();
        navigate('/edit');
        setEditNote(note);
    }

    return <div>
        <div onClick={clickNoteHandler} className="noteStyle">
            <h4>{note.name}</h4>
            <p>{note.description}</p>
        </div>
    </div>
}

export default GridNotes;