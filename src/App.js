import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    person: [
      { id: "0", name: "Shefali", age: 18 },
      { id: "1", name: "Shivani", age: 18 },
      { id: "2", name: "Arpit", age: 21.4 }
    ]
  }

  handlePersonClick = (index) => {
    let prevState = [...this.state.person];
    prevState.splice(index, 1);

    this.setState({ person: prevState });
  }

  render() {
    return (
      <div className="App">
        <h1>Person exercise</h1>
        {
          this.state.person.map((person, i) => {
            return <Person key={person.id} id={i} name={person.name} age={person.age} onClick={this.handlePersonClick} />
          })
        }
      </div>
    );
  }
}

export default App;
