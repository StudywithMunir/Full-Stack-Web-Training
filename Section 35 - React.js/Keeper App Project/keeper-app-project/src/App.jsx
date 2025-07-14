import React from 'react'
import Header from './components/header';
import Note from './components/note';
import Footer from './components/footer';
import notes from './modules/notes';

function App() {
  return <div>
    <Header />
    {/* mapping notes data inside a notesContainer div*/}
    <div className='notesContainer'>
      {/* this time instead of using named callback function we use arrow function with single parameter note
      which points to notes array */}
    {notes.map((note)=>{
      return <Note 
      // left side values are destructing objects from note.jsx and right side values are from note array and we acces
      // their properties
      key={note.key}
      title={note.title}
      content={note.content}
      />;
    })}
    </div>
    <Footer />
  </div>;
}

export default App;