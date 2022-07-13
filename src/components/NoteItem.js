import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";

function NoteItem({ title, createdAt, content, id, onArchive, onDelete, onNote }) {
  return (
    <div className={onArchive !== undefined ? "note-item note" : "note-item archive"}>
      <NoteHeader title={title} createdAt={createdAt} />
      <NoteBody content={content} id={id} onArchive={onArchive} onDelete={onDelete} onNote={onNote} />
    </div>
  );
}

export default NoteItem;
