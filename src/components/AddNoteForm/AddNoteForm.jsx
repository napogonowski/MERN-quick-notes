import { useState } from "react";
import * as usersService from '../../utilities/users-service';



export default function AddNoteForm(){
  // const [newNote, setNewNote] = useState({
  //     text: "", 
  //   }
  // )
  const [newNote, setNewNote] = useState("")

  async function _handleSubmit(e){
    e.preventDefault();
    try{
      console.log(newNote); 
      const createdNote = await usersService.createNote(newNote);
      setNewNote({
        text: ""
      }); 
    } catch (error) {
      console.log(error)
    }
    
  }
  function _handleChange(e){
    // console.log("HEre it is ", e.target.value)
    // PSUDEO: 
    // storing whatever the user types in a varaiable 
    // using the variable to set state 
    // OLD CODE: 
    // const brandNewNote = {...newNote, [e.target.name]: e.target.value  }
    const brandNewNote = e.target.value;
    // setNewNote(e.target.value)
    setNewNote(brandNewNote); 
    
    
  }


  return (
    <>
      <h2>Add New Note</h2>
      <form onSubmit={_handleSubmit}>
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