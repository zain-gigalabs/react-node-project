import React, { Component } from "react";

const Student = (props) => {
  return (
    <div>
      <h6>
        {props.name} is {props.age} years old
      </h6>
    </div>
  );
};

export default class Practice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      value: "Value set in state.",
    };
  }

  students = [
    { id: 1, name: "zain", age: 25 },
    { id: 2, name: "ali", age: 32 },
    { id: 3, name: "usama", age: 28 },
    { id: 4, name: "usman", age: 30 },
  ];

  studentList = this.students.map((student) => (
    <Student key={student.id} name={student.name} age={student.age} />
  ));

  componentDidMount() {
    console.log("mount");
    console.log(this.props);
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("unmount");
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("You clicked submit.");
    alert(this.state.value);
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <form onSubmit={this.handleSubmit}>
          <textarea value={this.state.value} onChange={this.handleChange} />
          <button type="submit">Submit</button>
          <div>{this.studentList}</div>
        </form>
      </div>
    );
  }
}
