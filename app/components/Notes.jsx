import React from 'react'
import Note from './Note.jsx'

export default ({notes}) => {
  return (
    <ul>
      {
        notes.map(
          n =>
          <li key={n.id}>
            <Note onEdit="hi" task={n.task} />
          </li>
        )
      }
    </ul>
  )
}
