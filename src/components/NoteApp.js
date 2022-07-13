import React from "react";
import { getInitialData, showFormattedDate } from "../utils/data";
import NoteList from "./NoteList";
import ArchiveList from "./ArchiveList";
import AddNote from "./AddNote";
import SearchBar from "./SearchBar";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData().map((note) => ({
        ...note,
        createdAt: showFormattedDate(note.createdAt),
      })),
      keyword: "",
      noteContainer: true,
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onMoveToNoteHandler = this.onMoveToNoteHandler.bind(this);
    this.onTypeHandler = this.onTypeHandler.bind(this);
  }

  onAddNoteHandler({ title, content, archiveStatus }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title: title,
            body: content,
            createdAt: showFormattedDate(new Date().toISOString()),
            archived: archiveStatus,
          },
        ],
      };
    });
  }

  onDeleteNoteHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.filter((note) => note.id !== id),
      };
    });
  }

  onArchiveNoteHandler(id) {
    this.setState((prevState) => {
      const selectedNote = prevState.notes.filter((note) => note.id === id)[0];
      const moveNote = (selectedNote.archived = true);
      return {
        notes: [...prevState.notes, moveNote],
      };
    });
  }

  onMoveToNoteHandler(id) {
    this.setState((prevState) => {
      const selectedNote = prevState.notes.filter((note) => note.id === id)[0];
      const moveNote = (selectedNote.archived = false);
      return {
        notes: [...prevState.notes, moveNote],
      };
    });
  }

  onTypeHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        keyword: event.target.value,
      };
    });
  }

  toggleContainerHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        noteContainer: event.target.value == "true",
      };
    });
  }

  render() {
    const activeNote = this.state.notes.filter((note) => note.archived === false).filter((note) => note.title.toLowerCase().includes(this.state.keyword.toLowerCase()));
    const archivedNote = this.state.notes.filter((note) => note.archived).filter((note) => note.title.toLowerCase().includes(this.state.keyword.toLowerCase()));
    return (
      <div className="main-container">
        <nav>
          <img src="./images/logo.svg" alt="quick note logo" />
          <SearchBar typed={this.state.keyword} onType={this.onTypeHandler} />
        </nav>
        <h1>
          <span>QUOTE</span>
          <br />
          <span>Qu</span>ick N<span>ote</span>
        </h1>
        <p>Quick, Easy, Simple Note</p>
        <AddNote addNote={this.onAddNoteHandler} />
        <div className="filter-container">
          <button value={true} onClick={(event) => this.toggleContainerHandler(event)} className={this.state.noteContainer ? "filter-note" : "filter-note inactive"}>
            Notes
          </button>
          <button value={false} onClick={(event) => this.toggleContainerHandler(event)} className={this.state.noteContainer ? "filter-archive inactive" : "filter-archive"}>
            Archives
          </button>
        </div>
        <div className={this.state.noteContainer ? "note-container" : "hidden"}>
          {(() => {
            if (activeNote.length !== 0) {
              return <NoteList notes={activeNote} onDelete={this.onDeleteNoteHandler} onArchive={this.onArchiveNoteHandler} />;
            } else {
              return <p className="empty-state">Empty note, add new note or move archive to note</p>;
            }
          })()}
        </div>
        <div className={this.state.noteContainer ? "hidden" : "archive-container"}>
          {(() => {
            if (archivedNote.length !== 0) {
              return <ArchiveList notes={archivedNote} onDelete={this.onDeleteNoteHandler} onNote={this.onMoveToNoteHandler} />;
            } else {
              return <p className="empty-state">Empty archive, add new note or move note to archive</p>;
            }
          })()}
        </div>
      </div>
    );
  }
}

export default NoteApp;
