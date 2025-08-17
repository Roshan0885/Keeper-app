import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateNote from './components/CreateNote';
import Note from './components/Note';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== id));
  };

  const startEdit = (id) => {
    setEditingNote(id);
  };

  const updateNote = (id, updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note, index) => (index === id ? updatedNote : note))
    );
    setEditingNote(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4">
        <CreateNote onAdd={addNote} />
        <div className="grid gap-4 md:grid-cols-3">
          {notes.map((note, index) => (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
              onEdit={startEdit}
              onUpdate={updateNote}
              isEditing={editingNote === index}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;