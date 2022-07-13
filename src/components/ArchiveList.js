import React from "react";
import NoteItem from "./NoteItem";

function ArchiveList({ notes, onDelete, onNote }) {
  return notes.map((note) => <NoteItem key={note.id} {...note} content={note.body} onDelete={onDelete} onNote={onNote} />);
}

export default ArchiveList;
