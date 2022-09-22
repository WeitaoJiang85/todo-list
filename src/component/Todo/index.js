import { Component } from "react";

import "./index.css";

export default class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <p
          style={
            this.props.completed === true
              ? { textDecoration: "line-through" }
              : null
          }
        >
          {this.props.item}
          <span
            style={this.props.urgent === !true ? { display: "none" } : null}
          >
            ⏰
          </span>
        </p>
        <div>
          <button onClick={this.props.deleteItem}>Delete</button>
          <button onClick={this.props.handleCompletedChange}>
            {this.props.completed ? "Uncomplete" : "Completed?"}
          </button>
        </div>
      </div>
    );
  }
}
