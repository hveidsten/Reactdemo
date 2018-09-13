import React from "react";
import ListItem from "./ListItem";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      formValue: event.target.value
    });
  }

  handleSubmit() {
    this.props.onSubmit(this.state.formValue);
    this.setState({
      formValue: ""
    });
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.formValue} />
        <button onClick={this.handleSubmit}>Legg til</button>
        <ul>
          {this.props.items.map((i, k) => {
            return <ListItem key={k} item={i} />;
          })}
        </ul>
      </div>
    );
  }
}
