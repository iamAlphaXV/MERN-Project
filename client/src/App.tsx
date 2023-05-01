import React from "react";
import "./App.css";
import { Note as NoteModel } from "./models/notes";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = React.useState<NoteModel[]>([]);

  React.useEffect(() => {
    async function loadNotes() {
      try {
        const response = await fetch("/api/notes", { method: "GET" });
        const notes = await response.json();
        console.log(notes);
        setNotes(notes);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadNotes();
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl">This is a test </h1>
      {JSON.stringify(notes)}

      {notes.map((note) => (
        <Note note={note} key={note._id} />
      ))}
    </div>
  );
}

export default App;
