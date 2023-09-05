import { useState } from "react";
import * as usersService from '../../utilities/users-service';


export default function AddNoteForm(){
  const [newNote, setNewNote] = useState({
      text: "", 
    }
  )

  async function _handleSubmit(e){
    e.preventDefault();
    try{
      const createdNote = await createNote(newNote);
      setNewNote({
        text: ""
      }); 
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <>
      <h2>Add New Note</h2>
      <form onSubmit={_hanldeAddNote}>
        <label>Enter Note Below</label>
        <textarea 
        name="text" 
        value={newNote.text}
        onChange={_handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );

}