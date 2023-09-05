export default function DisplayNote({userNotes}){
  return (
    <>
      <div className="note-body">
      {userNotes.map(note => (
          <div key={note._id} className="note-content">
          <h5>Created at: {new Date(note.timestamp).toLocaleDateString()}</h5>, 
          <p>{note.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}