import React from 'react'
import Row from './Row.jsx'
import _ from 'underscore'

export default class Board extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {nrows, ncols, clicked, board} = this.props;

        return (
            <table style={{backgroundColor:"transparent",borderSpacing:0}}>
                {
                    _.times(nrows,(i) => <Row ncols={ncols} row={i} clicked={clicked} boardRow={board[i]} /> )
                }
            </table>
        )

    }
}
