import React from 'react'
import Cell from './Cell.jsx'
import _ from 'underscore'

export default class Row extends React.Component {

    constructor (props) {
        super(props)
    }

    render() {

        return (
            <tr>
                {
                    _.times(this.props.ncols,
                        () =>
                            <Cell nextTurn={this.props.nextTurn} p1Turn={this.props.p1Turn} />
                    )
                }
            </tr>
        )
    }


}


