import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import { Header } from './components/header/header';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.company.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <Header handleChange={e => {
          this.setState({ searchField: e.target.value });
        }} />
        <CardList monsters={filteredMonsters} />

      </div>
    )
  }
}

export default App;
