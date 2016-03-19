import React from 'react'

export default class Note extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }



  render() {
    if(this.state.editing) {
      return <div>{this.props.task} edit</div>

    }
    else {
      return <div onClick={() => this.setState({editing:true})}>{this.props.task}</div>
    }

  }

}
