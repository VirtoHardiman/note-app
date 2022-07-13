import React from "react";

function NoteDate({ createdAt }) {
  return <p className="date">{createdAt}</p>;
}

export default NoteDate;
