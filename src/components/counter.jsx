import React, { Component } from "react";
class Counter extends Component {
  render() {
    let classes = this.getBagdeClasses();
    return (
      <div className="mb-4">
        <span className={classes}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>
        <button
          className="btn btn-warning btn-sm ml-2"
          onClick={() => this.props.onDecrement(this.props.counter)}
          disabled={this.props.counter.value === 0}
        >
          -
        </button>
        <button
          className="btn btn-danger btn-sm ml-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBagdeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
