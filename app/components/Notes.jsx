import React from 'react'
import Note from './Note.jsx'

export default class Notes extends React.Component {

    render() {

        return (
            <ul>
                {
                    this.props.notes.map(
                        n =>
                            <li key={n.id}>
                                <Note onEdit={ (v) => this.props.onEdit(n.id,v) } task={n.task} />
                            </li>
                    )
                }
            </ul>
        )
    }



      //<Note onEdit={this.props.onEdit.bind(undefined,n.id)} task={n.task} />

}
