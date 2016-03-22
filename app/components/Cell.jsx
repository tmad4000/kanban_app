import React from 'react'

export default class Cell extends React.Component {
  constructor(props) {
    super(props)
    //this.state={whoseStone:null}
  }


  //clicked = () => {
  //  if(this.state.whoseStone==null)
  //    this.setState({whoseStone:p1Turn ? 1 : 2})
  //
  //  nextTurn()
  //}

  render() {


    // return <div contentEditable={this.state.editing} autoFocus={true}
    //   onClick={
    //   (e) => {
    //     console.log(e.target.focus);
    //
    //     this.setState({editing:!this.state.editing});
    //     e.target.focus();
    //   }
    // }>{task}</div>



    //if(this.state.editing) {
    //  return <input
    //  ref={
    //    (e) => e ? e.selectionStart = task.length : null
    //  }
    //  autoFocus={true}
    //  onBlur={ () => this.setState({editing:false }) }
    //  onKeyPress={ (e) => {
    //      if(e.key === 'Enter') {
    //        e.target.blur();
    //        // this.finishEdit(e);
    //      }
    //
    //    }
    //  }
    //
    //  type="text"
    //  defaultValue={task} />;
    //}
    //else {
    //}

    const {whoseStone, row, col, clicked} = this.props

    return <td onClick={ () => clicked(row,col) } style={{ width:"30px",height:"30px"}}>
      <div className="intersection" style={{textAlign:"center",color: whoseStone==null ? "transparent" : whoseStone==1 ? "white" : "black", fontSize:"30px"}}>
        &#x25cf;
      </div>
    </td>


  }

}
