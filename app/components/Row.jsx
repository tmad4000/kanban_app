import React from 'react'
import Cell from './Cell.jsx'
import _ from 'underscore'

export default class Row extends React.Component {

    constructor (props) {
        super(props)
    }

    render() {
        //let a = {
        //    b: 2,
        //    d: {e: 4},
        //    c: [1,2,3]
        //};
        //const {b} = a;
        //const {d: {e}} = a;
        //
        //d == {a: 4}
        //b == 2
        //e == 4
        //
        //{c: [g,h,i]} = a

        const {clicked, ncols, row, boardRow} = this.props

        return (
            <tr>
                {
                    _.times(ncols,
                        (i) =>
                            <Cell clicked={clicked} col={i} row={row} whoseStone={boardRow[i]} />
                    )
                }
            </tr>
        )
    }


}


