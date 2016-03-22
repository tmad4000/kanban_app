import React from 'react'

export default class Cell extends React.Component {
  constructor(props) {
    super(props)
    this.state={whoseStone:null}
  }


  clicked = () => {
    this.setState({whoseStone:this.props.p1Turn ? 1 : 2})
    this.props.nextTurn()
  }

  render() {

    // return <div contentEditable={this.state.editing} autoFocus={true}
    //   onClick={
    //   (e) => {
    //     console.log(e.target.focus);
    //
    //     this.setState({editing:!this.state.editing});
    //     e.target.focus();
    //   }
    // }>{this.props.task}</div>



    //if(this.state.editing) {
    //  return <input
    //  ref={
    //    (e) => e ? e.selectionStart = this.props.task.length : null
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
    //  defaultValue={this.props.task} />;
    //}
    //else {
    //}
    return <td onClick={ this.clicked } >{this.state.whoseStone==null ? 0 : this.state.whoseStone} </td>


  }

}
