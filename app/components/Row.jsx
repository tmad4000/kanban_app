import React from 'react'
import Cell from './Cell.jsx'

export default class Row extends React.Component {

    constructor (props) {
        super(props)
    }

    render() {

        return (
            <tr>
                {
                    this.props.cols.map(
                        (stone,i) =>
                            <Cell whoseStone={stone} nextTurn={this.props.nextTurn} p1Turn={this.props.p1Turn} />
                    )
                }
            </tr>
        )
    }


}


