import { Component } from 'react'

import './index.css'

export default class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <p
          style={
            this.props.completed ? { textDecoration: 'line-through' } : null
          }
        >
          {this.props.item}
          <span
            style={this.props.urgent === !true ? { display: 'none' } : null}
          >
            ⏰
          </span>
        </p>

        <button onClick={this.props.deleteItem}>Delete</button>
        <button onClick={this.props.handleCompletedChange}>Completed?</button>
      </div>
    )
  }
}
