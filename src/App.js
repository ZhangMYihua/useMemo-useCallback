import React from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './person.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      person: { name: 'Jack', age: 22 },
      showPerson: false
    };
  }

  render() {
    const { count, person, showPerson } = this.state;

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          {showPerson ? <Person person={person} /> : null}
          Button Count: {count}
          <button onClick={() => this.setState({ count: count + 1 })}>
            Increase Count
          </button>
          <button onClick={() => this.setState({ showPerson: !showPerson })}>
            Toggle Person
          </button>
        </header>
      </div>
    );
  }
}

export default App;
