import { useState,  useEffect } from "react"
import * as userService from '../../utilities/users-service';
import DisplayNote from "../../components/DisplayNote/DisplayNote";
import AddNote from "../../components/AddNoteForm/AddNoteForm";


export default function Home({user}){
  const [userNotes, setUserNotes] = useState([]); 



  async function hasNotes() {
      try{
          const notes = await userService.getUserNotes(); 
          setUserNotes(notes)
      } catch (error) {}
  }
  useEffect(() => {
    hasNotes(); 
  }, []); 

  return (
    <>
    <div>
      {userNotes.length >0 ? 
        <div>
          <DisplayNote userNotes={userNotes} />
        </div>
      : <h3>No Notes Yet</h3>
      }
      <AddNoteForm  />
    </div>
    </>
  )
}