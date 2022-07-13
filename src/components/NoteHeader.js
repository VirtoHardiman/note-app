import React from "react";
import NoteTitle from "./NoteTitle";
import NoteDate from "./NoteDate";

function NoteHeader({ title, createdAt }) {
  return (
    <>
      <NoteTitle title={title} />
      <NoteDate createdAt={createdAt} />
    </>
  );
}

export default NoteHeader;
