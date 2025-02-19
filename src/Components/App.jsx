import React, { useState } from "react";
import Footer from "./Footer";
import Note from "./Note";
import Header from "./Header";
import notesData from "../notes";
import CreateArea from "../CreateArea";

function createNote(myNote) {
    return (
        <Note
            key={myNote.key}
            noteTitle={myNote.title}
            noteContent={myNote.content}
        />
    );
}

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes(
            prevNote => {
                return prevNote.filter(
                    (NodeItems, index) => { return index !== id; }
                )
            }
        )
    };

    return (
        <div>
            <Header></Header>
            <CreateArea onAdd={addNote} />
            {notes.map((myNote, index) => {
                return <Note
                    key={index}
                    id={index}
                    title={myNote.title}
                    content={myNote.content}
                    onDelete={deleteNote}></Note>;
            })}
            <Footer></Footer>
        </div >
    )
}

export default App;

