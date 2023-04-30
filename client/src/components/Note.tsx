import React from "react";
import { Note as NoteModel } from "../models/notes";

interface NoteProps {
  note: NoteModel;
}

function Notes({ note }: NoteProps) {
  return <div>Notes</div>;
}

export default Notes;
