import React, { useState } from "react";

function CreateArea(props) {
  // complex state - object
  const [note,setNote] = useState(
    {
      title: "",
      content: "",
    }
  );

  function handleChange(event) {
    const {name,value} = event.target;
    setNote(prevNote =>{
      return {
        ...prevNote, //keeps all props of object like title,content
        [name]: value, //dynamic object key generation based on input user types
      };
    });
  }

  // when button is clicked the data inside the state note will be sent to App.jsx
  function submitNote(event) {
    // from App.jsx
    props.onAdd(note); //passing the current created note
    // after note created we are clearing it
    setNote({
      title: "",
      content: "",
    })
    event.preventDefault(); //prevents reload
  }

  return (
    <div>
      <form>
        <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />
        <textarea name="content" value={note.content} onChange={handleChange} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
