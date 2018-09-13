import React from "react";
import List from "./Components/List";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      items: ["Dette", "er", "en", "liste"]
    });
  }

  onSubmit(newItem) {
    this.setState({
      items: [...this.state.items, newItem]
    });
  }

  render() {
    return <List onSubmit={this.onSubmit} items={this.state.items} />;
  }
}
