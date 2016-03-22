import React from 'react'
import Row from './Row.jsx'

export default class Board extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <table>
                {
                    this.props.rows.map( (r) => <Row cols={r} nextTurn={this.props.nextTurn} p1Turn={this.props.p1Turn} /> )
                }
            </table>
        )

    }
}
