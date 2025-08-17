import React, { useState } from 'react';

const Note = ({ id, title, content, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({ title, content });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedNote((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!editedNote.title.trim() || !editedNote.content.trim()) {
      alert("Both title and content are required!");
      return;
    }
    onUpdate(id, editedNote);
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow p-4 rounded relative">
      {isEditing ? (
        <>
          <input
            className="w-full p-2 border border-gray-300 rounded mb-2"
            name="title"
            value={editedNote.title}
            onChange={handleChange}
          />
          <textarea
            className="w-full p-2 border border-gray-300 rounded mb-2"
            name="content"
            value={editedNote.content}
            onChange={handleChange}
            rows="3"
          />
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded mr-2"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <p className="mb-4">{content}</p>
          <div className="absolute bottom-2 right-2 flex space-x-2">
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Note;