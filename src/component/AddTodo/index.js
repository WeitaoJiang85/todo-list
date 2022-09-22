import { Component } from "react";

export default class AddTodo extends Component {
  state = {
    item: "",
    urgent: false,
  };

  handleChange = (e, state) => {
    switch (state) {
      case "item":
        this.setState({ item: e.target.value });
        break;
      case "urgent":
        this.setState({ urgent: e.target.checked ? true : false });
        break;
      default:
        break;
    }
  };

  handleAdd = () => {
    const toDoList = this.props.toDoList;
    const newTodo = {
      id: toDoList.length + 1,
      item: this.state.item,
      urgent: this.state.urgent,
      completed: false,
    };
    this.props.addNewTodo(newTodo);
    this.setState({
      item: "",
      urgent: false,
    });
  };

  render() {
    return (
      <>
        <p>Todo item : {this.state.item}</p>
        <p>Urgent : {this.state.urgent === true ? "Yes" : "No"}</p>

        <input
          style={{ marginRight: 20 }}
          type="text"
          onChange={(e) => this.handleChange(e, "item")}
          value={this.state.item}
          placeholder="Input your todo item at here"
          id="addItem"
        />
        <button
          style={{ marginRight: 20 }}
          htmlFor="addItem"
          onClick={this.handleAdd}
        >
          Add Todo
        </button>
        <label style={{ marginRight: 20 }}>
          <input
            type="checkbox"
            onClick={(e) => this.handleChange(e, "urgent")}
          />
          Is it Urgent?
        </label>

        <button
          style={{ marginRight: 20 }}
          onClick={() => this.props.handleRemoveElement("first")}
        >
          Delete First Todo
        </button>

        <button
          style={{ marginRight: 20 }}
          onClick={() => this.props.handleRemoveElement("last")}
        >
          Delete Last Todo
        </button>

        <button style={{ marginRight: 20 }} onClick={this.props.filterComplete}>
          Only show completed
        </button>

        <button style={{ marginRight: 20 }} onClick={this.props.filterUrgent}>
          Only show urgent
        </button>

        <button style={{ marginRight: 20 }} onClick={this.props.handleClear}>
          Clear
        </button>
      </>
    );
  }
}
