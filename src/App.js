import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import CreateArea from "./Components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function handleNoteAdd(note) {
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });
  }

  function handleNoteDelete(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((elem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleNoteAdd} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={handleNoteDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
