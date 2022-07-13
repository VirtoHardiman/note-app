import React from "react";

class AddNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      archiveStatus: false,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onContentChangeEventHandler = this.onContentChangeEventHandler.bind(this);
    this.onArchiveStatusChangeEventHandler = this.onArchiveStatusChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState((prevState) => {
      if (this.state.title.length < 50 || event.target.value.length < 50) {
        return {
          ...prevState,
          title: event.target.value,
        };
      }
    });
  }

  onContentChangeEventHandler(event) {
    this.setState((prevState) => {
      if (this.state.content.length < 500 || event.target.value.length < 500) {
        return {
          ...prevState,
          content: event.target.value,
        };
      }
    });
  }

  onArchiveStatusChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        archiveStatus: event.target.value == "true",
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitEventHandler}>
        <div className="title-label">
          <label htmlFor="note-title">Title</label>
          <p>Character left: {50 - this.state.title.length}</p>
        </div>
        <input type="text" placeholder="Title note" id="note-title" value={this.state.title} onChange={this.onTitleChangeEventHandler} onPaste={(event) => event.preventDefault()} />
        <div className="content-label">
          <label htmlFor="note-content">Content</label>
          <p>Character left: {500 - this.state.content.length}</p>
        </div>
        <textarea type="text" placeholder="Note content" id="note-content" value={this.state.content} onChange={this.onContentChangeEventHandler} onPaste={(event) => event.preventDefault()} />
        <label htmlFor="archive-status">Note/Archive</label>
        <select id="archive-status" value={this.state.archiveStatus} onChange={this.onArchiveStatusChangeEventHandler}>
          <option value="false">Note</option>
          <option value="true">Archive</option>
        </select>
        <input type="submit" disabled={this.state.title.length === 0 || this.state.content.length === 0 ? true : false} />
      </form>
    );
  }
}

export default AddNote;
