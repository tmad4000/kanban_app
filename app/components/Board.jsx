import React from 'react'
import Row from './Row.jsx'
import _ from 'underscore'

export default class Board extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <table style={{backgroundColor:"transparent",borderSpacing:0}}>
                {
                    _.times(this.props.nrows,() => <Row ncols={this.props.ncols} nextTurn={this.props.nextTurn} p1Turn={this.props.p1Turn} /> )
                }
            </table>
        )

    }
}
