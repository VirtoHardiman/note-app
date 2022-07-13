import React from "react";
import NoteContent from "./NoteContent";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import NoteButton from "./NoteButton";

function NoteBody({ content, id, onDelete, onArchive, onNote }) {
  return (
    <div>
      <NoteContent content={content} />
      <div className="action-note">
        {(() => {
          if (onArchive !== undefined) {
            return <ArchiveButton id={id} onArchive={onArchive} />;
          } else {
            return <NoteButton id={id} onNote={onNote} />;
          }
        })()}
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default NoteBody;
