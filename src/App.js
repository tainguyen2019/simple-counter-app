import React, { Component } from 'react';
import Counters from './components/counters';
import Navbar from './components/navbar';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    response: [],
    error: ''
  };

  handleDelete = (counterID) => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters: counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(result => this.setState({ response: result }))
      .catch(error => this.setState({ error: error.message }));
  }

  render() {
    const { error, response } = this.state;
    return (
      <div>
        <Switch>
          <Route path="/simple-counter-app" exact><Navbar count={this.state.counters.filter(c => c.value > 0).length} />
            <main className="container">
              <Counters
                counters={this.state.counters}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                onReset={this.handleReset}
              />
              <strong>Fetch Data from https://jsonplaceholder.typicode.com/todos</strong>
              <ul>
                {error || response.map(item => (
                  <li key={item.id}>
                    {item.id} {item.title}
                  </li>
                ))}
              </ul>
            </main>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
