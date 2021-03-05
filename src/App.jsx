import React from "react";
import SearchBox from "./Components/SearchBox";
import CardList from "./Components/CardList";
import Scroll from "./Components/Scroll";
// import { robots } from "./Components/Robots";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const fliteredRobots = this.state.robots.filter((user) => {
      return user.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={fliteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
