import React from 'react'

export default class Note extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }


  edit = (e) => {
    this.setState({editing:true })
  }

  finishEdit = (e) => {
    //const {value} = e.target
    //
    //if(this.props.onEdit) {
    //  this.props.onEdit(value)
    //}

    this.setState({editing:false })
  }

  checkEnter = (e) => {
  console.log(this.props.onEdit)
    if(e.key === 'Enter') {
      e.target.blur();
      this.finishEdit(e);
    }
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



    if(this.state.editing) {
      return <input type="text"
        ref={
          (e) => e ? e.selectionStart = this.props.task.length : null
        }
        autoFocus={true}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
        defaultValue={this.props.task} />;
    }
    else {
      return <div onClick={this.edit} >{this.props.task} </div>
    }


  }

}
