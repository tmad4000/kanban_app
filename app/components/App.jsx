import React from 'react'
import Notes from './Row.jsx'
import uuid from 'node-uuid'
import Board from './Board.jsx'

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            p1Turn: true,
            rows: [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ]
        }

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
        const rows = this.state.rows;


        return (
            <div>
                <div>turn: {this.state.p1Turn ? 1 : 2}</div>
                <Board rows={this.state.rows} nextTurn={this.nextTurn} p1Turn={this.state.p1Turn} />
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

    nextTurn  = () => {

        console.log(this)
        this.setState({p1Turn: !this.state.p1Turn})

    }


}

//<Board rows={rows}/>
