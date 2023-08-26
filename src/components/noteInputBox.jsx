import React, { useState } from 'react'
import ButtonUi from './button'
import * as BsIcons from 'react-icons/bs'
import Header from './header';

const NoteInputBox = ({ addedClasses }) => {
  const [showBox, setShowBox] = useState(false);
  const showInputBox = () => {
    setShowBox(!showBox);
  }
  const [notes, setNotes] = useState([]);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteDetail, setNoteDetail] = useState('');
  const addNewNote = (e) => {
    e.preventDefault();
    setNotes((newNote) => {
      return [...newNote, {
        id: crypto.randomUUID(),
        title: noteTitle,
        note: noteDetail,
        openMenu: false
      }]
    });
    setShowBox(false);
    setNoteTitle('');
    setNoteDetail('');
  }

  function showMenue(id, openMenu) {
    setNotes(currentNote => {
      return currentNote.map(note => {
        if (note.id === id) {
          return { ...note, openMenu }
        }
        return note
      })
    })
  }
  return (
    <div className={`notesBox ${addedClasses}`}>
      <Header showInputBox={showInputBox} showBox={showBox} />
      {showBox ? <form action="#" onSubmit={addNewNote} className='note_form mt-4'>
        <input type="text" name="noteTitle" onChange={e => setNoteTitle(e.target.value)} value={noteTitle} placeholder='Note title' className='ring-1 ring-gray-300 w-full p-2 rounded-md shadow-md outline-none focus:ring-red-500' required />
        <div className="mt-4">
          <textarea name="noteArea" cols="30" value={noteDetail} onChange={e => setNoteDetail(e.target.value)} rows="5" className='ring-1 ring-gray-300 w-full p-2 rounded-md shadow-md outline-none focus:ring-red-500' placeholder='Type your notes here...' required></textarea>
        </div>
        <div className="mt-4">
          <ButtonUi
            btnText={'Submit note'}
          />
        </div>
      </form> : null}

      {notes.length === 0 && <h3 className='text-gray-500 mt-8 text-xl text-center'>You have no notes.</h3>}
      <div className={notes.length === 0 ? null : 'mt-8'}>
        {notes.map((allNotes) => {
          const { id, title, note, openMenu } = allNotes;
          return (
            <div key={id} className='mb-3 ring-1 ring-gray-400 py-5 px-3 rounded-md shadow-md'>
              <div className="flex items-center">
                <div className="mr-auto">
                  <h1 className='text-gray-900 font-bold text-xl'>
                    {title}
                  </h1>
                </div>
                <div className='relative'>
                  <button onClick={() => showMenue(id, !openMenu)} className='bg-transparent text-gray-500 outline-none'>
                    <BsIcons.BsThreeDotsVertical />
                  </button>
                  {openMenu ? <div className="absolute p-1.5 dropdown shadow-md rounded-md ring-1 ring-gray-500 bg-white right-0 top-3 mt-3">
                    <button className='w-full p-2 text-left rounded-md bg-transparent duration-300 hover:bg-gray-100'>
                      Edit note
                    </button>
                    <button className='w-full p-2 rounded-md text-left bg-transparent duration-300 hover:bg-gray-100'>
                      Delete note
                    </button>
                  </div> : null}
                </div>
              </div>
              <p className='text-gray-500 text-sm mt-3 truncate'>
                <i>
                  {note}
                </i>
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NoteInputBox