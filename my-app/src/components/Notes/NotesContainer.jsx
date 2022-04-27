import React, { useState, useEffect } from 'react';
import Notes from './Notes';
import './notes.css';
import startNotes from '../../data/startNotes.json'
import { Route, Routes } from 'react-router-dom';
import EditNote from '../EditNote/EditNote';

const NotesContainer = () => {

  const [notes, setNotes] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [editNote, setEditNote] = useState([]);

  useEffect(() => {
    if (localStorage.getItem(STORE_KEY)) {
      setNotes(JSON.parse(localStorage.getItem(STORE_KEY)));
    } else {
      setNotes(startNotes);
    }
  }, []);

  const STORE_KEY = 'STORE_KEY';

  const getAddNoteData = (nameNote, descriptionNote) => {
    if (!(nameNote && descriptionNote)) {
      return alert("Заполните данные корректно");
    } else {
      const obj = {
        name: nameNote,
        description: descriptionNote
      }
      const copyNotes = notes.concat();
      copyNotes.push(obj);
      setNotes(copyNotes);
      localStorage.setItem(STORE_KEY, JSON.stringify(copyNotes));
    }
  }

  return <div className="container">
    <Routes>
      <Route path="/edit" element={<EditNote editNote={editNote}
        notes={notes}
        setNotes={setNotes} />} />
      <Route path="/" element={
        <Notes popupActive={popupActive}
          setPopupActive={setPopupActive}
          notes={notes}
          getAddNoteData={getAddNoteData}
          setEditNote={setEditNote}
        />
      } />
    </Routes>
  </div>
}

export default NotesContainer;