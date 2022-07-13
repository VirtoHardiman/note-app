import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive, onNote }) {
  return notes.map((note) => <NoteItem key={note.id} {...note} content={note.body} onDelete={onDelete} onArchive={onArchive} onNote={onNote} />);
}

export default NoteList;
