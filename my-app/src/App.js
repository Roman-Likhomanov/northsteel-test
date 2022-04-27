import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NotesContainer from './components/Notes/NotesContainer';

const App = () => {
  return <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NotesContainer />
    </BrowserRouter>
  </React.StrictMode>
}

export default App;
