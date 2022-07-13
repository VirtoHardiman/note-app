import React from "react";

function NoteButton({ id, onNote }) {
  return (
    <button className="note-button" onClick={() => onNote(id)}>
      Move to Notes
    </button>
  );
}

export default NoteButton;
