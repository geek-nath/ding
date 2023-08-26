import React from 'react'
import NoteInputBox from '../components/noteInputBox'
import { Link } from 'react-router-dom'

const AllNotes = () => {
  return (
    <>
      <div className="todo_wrap bg-gray-100">
        <div className="todo_container bg-white py-14 px-9 shadow-md w-2/5 rounded-lg ring-1 ring-gray-300">
          <div className="notes_container">
            <NoteInputBox />
          </div>
          <div className="text-center mt-3">
            <Link to={'/'} className="text-red-500">Go back home</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllNotes