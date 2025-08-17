import React, { useState } from 'react';

const CreateNote = ({ onAdd }) => {
  const [note, setNote] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const submitNote = (e) => {
    e.preventDefault();
    if (!note.title.trim() || !note.content.trim()) {
      alert('Both title and content are required!');
      return;
    }
    onAdd(note);
    setNote({ title: '', content: '' });
  };

  return (
    <form className="mb-6 bg-white shadow p-4 rounded" onSubmit={submitNote}>
      <input
        className="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
      />
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
        rows="3"
      />
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default CreateNote;