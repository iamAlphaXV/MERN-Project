import React from "react";
import { Note as NoteModel } from "../models/notes";

interface NoteProps {
  note: NoteModel;
}

function Notes({ note }: NoteProps) {
  return (
    <div className=" flex content-center justify-center border border-slate-400 m-5 ">
      {" "}
      {note.title} {note.text}
    </div>
  );
}

export default Notes;
