import React from 'react'
import Notes from './Row.jsx'
import uuid from 'node-uuid'
import Board from './Board.jsx'
import _ from 'underscore'

export default class App extends React.Component {

    constructor(props) {
        super(props);
        const nrows = 19;
        const ncols = 19;

        this.state = {
            p1Turn: true,
            nrows,
            ncols,
            board: _.times(nrows, (r) => _.times(ncols, (c) => null))
        }


        //this.state = {
        //    p1Turn: true,

        //}

        //  this.state={
        //
        //   notes : [
        //    {
        //      id: uuid.v4(),
        //      task: 'Learn Webpack'
        //    },
        //    {
        //      id: uuid.v4(),
        //      task: 'Learn React'
        //    },
        //    {
        //      id: uuid.v4(),
        //      task: 'Do laundry'
        //    }
        //  ]
        //
        //}
    }

    render() {

        const {board, p1Turn, ncols, nrows} = this.state;


        return (
            <div>
                <div>turn: {p1Turn ? 1 : 2}</div>
                <Board nrows={nrows} ncols={ncols} clicked={this.clicked} board={board} />
            </div>

        )

    }

    //nextTurn() {
    //
    //}
    //
    //nextTurn = function() {
    //
    //}

    clicked = (r,c) => {
        let b = _.clone(this.state.board);

        if(b[r][c]===null) {

            b[r][c]=this.state.p1Turn ? 1 : 2
            this.setState({board:b})

            this.nextTurn()

        }

    }



    nextTurn  = () => {

        this.setState({p1Turn: !this.state.p1Turn})

    }


}

//<Board rows={rows}/>
