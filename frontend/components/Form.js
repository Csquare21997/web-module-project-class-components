import React from 'react'

export default class Form extends React.Component {
  state = {
    name: '',
  }
onsubmit = evt => {
  evt.preventDefault ()
  this.props.addTodo(this.state.name)
  this.setState({
    ...this.state,
    name:''
  })

}

onChange = evt => {
  const {value} = evt.target
  console.log(value)
  this.setState({
    ...this.state,
    name:value
})
}

  render() {
    
    return (
        <form onSubmit={this.onsubmit}>
          <input type = "text" value = {this.state.name} onChange={this.onChange}/>
          <input type = "submit" />
        </form>
    )
  }
}
