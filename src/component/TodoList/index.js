import { Component } from "react";
import Todo from "../Todo";
import AddTodo from "../AddTodo";
import "./index.css";

const startingTodo = [
  {
    id: 1,
    item: "Buy some veggies",
    urgent: false,
    completed: false,
  },
  {
    id: 2,
    item: "Buy some meets",
    urgent: true,
    completed: true,
  },
  {
    id: 3,
    item: "Clean house",
    urgent: false,
    completed: true,
  },
  {
    id: 4,
    item: "GO to the Gym",
    urgent: false,
    completed: true,
  },
  {
    id: 5,
    item: "Clean car",
    urgent: true,
    completed: false,
  },
  {
    id: 6,
    item: "Clean deck",
    urgent: false,
    completed: true,
  },
];

export default class ToDoList extends Component {
  state = { toDoList: startingTodo, keyWord: "" };

  addNewTodo = (newTodo) => {
    console.log("Received todo:", newTodo);

    this.setState({ toDoList: [newTodo, ...this.state.toDoList] });
  };

  handleClear = () => {
    this.setState({ toDoList: [] });
  };

  handleRemoveElement = (position) => {
    if (position === "first") {
      this.state.toDoList.shift();
      this.setState({ toDoList: this.state.toDoList });
    }

    if (position === "last") {
      this.state.toDoList.pop();
      this.setState({ toDoList: this.state.toDoList });
    }
  };

  deleteItem = (id) => {
    const newArray = this.state.toDoList.filter((todo) => todo.id !== id);
    this.setState({ toDoList: newArray });
  };

  handleCompletedChange = (id) => {
    this.state.toDoList.filter((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return { ...this.state.toDoList, todo };
    });
  };

  filterComplete = () => {
    const completedArray = this.state.toDoList.filter(
      (completedL) => completedL.completed === true
    );
    this.setState({ toDoList: completedArray });
  };

  filterUrgent = () => {
    const urgentArray = this.state.toDoList.filter(
      (urgentL) => urgentL.urgent === true
    );
    this.setState({ toDoList: urgentArray });
  };

  filterByKewWord = () => {
    const keyWord = this.state.keyWord;
    const searchResult = this.state.toDoList.filter((todos) =>
      todos.item.toLowerCase().includes(keyWord.toLowerCase())
    );
    this.setState({
      toDoList:
        searchResult.length > 0 ? searchResult : alert("No matches found"),
    });
  };

  handleInput = (e) => {
    this.setState({ keyWord: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <h1 className="head">Todo List</h1>
        <div className="addTodo">
          <AddTodo
            toDoList={this.state.toDoList}
            addNewTodo={(newTodo) => this.addNewTodo(newTodo)}
            handleClear={this.handleClear}
            handleRemoveElement={this.handleRemoveElement}
            filterComplete={this.filterComplete}
            filterUrgent={this.filterUrgent}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder=" Enter your keywords"
            id="keyword"
            onChange={(e) => this.handleInput(e)}
            value={this.state.keyWord}
          />
          <button htmlFor="kewword" onClick={this.filterByKewWord}>
            Search by keyword
          </button>
        </div>

        <div className="itemList">
          {this.state.toDoList
            .sort((a, b) => b.urgent - a.urgent)
            .map((todos) => {
              return (
                <Todo
                  key={todos.id}
                  item={todos.item}
                  urgent={todos.urgent}
                  completed={todos.completed}
                  deleteItem={() => this.deleteItem(todos.id)}
                />
              );
            })}
        </div>
      </div>
    );
  }
}
