import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: "Jeremy",
      people: [
        { name: "Sally W.", age: 23 },
        { name: "Rick S.", age: 30 },
        { name: "Samantha T.", age: 52 }
      ]
    };
  }
  
  handleUserInput = (e) => {
    
    this.setState({
      user: e.target.value
    });

  }
  
  handleNameInput = (e) => {
    
    e.preventDefault();
    
    this.setState({
      user: e.target.value
    });
    

  }
  
  handleNameSubmit = (e) => {
    
    e.preventDefault();
    
    this.setState({
      people: [...this.state.people, { name: this.state.user }]
    });
    

  }
  
  

  render() {
    const { people } = this.state;
    return (
      <div className="App">
        <h1>Add a name </h1>
        <form onSubmit={this.handleNameSubmit}>
          <input type="text" value={this.state.user} onChange={this.handleNameInput} />
          <button type="submit" value="submit">Add Name</button>
        </form>
        <h2> People - Names </h2>
        <ul className="people">
          {people.map((person, id) => (
            <li className="person" key={id}>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
