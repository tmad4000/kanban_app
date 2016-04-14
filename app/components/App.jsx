import React from 'react'
import Notes from './Notes.jsx'
import uuid from 'node-uuid'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state={

       notes : [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]

    }
  }

  render() {
    const notes = this.state.notes;


    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes onEdit={this.editNote} notes={notes} />
      </div>
    )

  }


    editNote = (id, v) => {
        const notes = this.state.notes.map( (n) => {
                if(n.id === id)
                    n.task=v
                return n
            })


        this.setState({notes})

        //this.setState({
        //        notes: newNotes
        //    })
    }



  addNote = () => {
    this.setState({
      notes:this.state.notes.concat([{
        id:uuid.v4(),
        task:"New task"
      }])
    })
  }
}
