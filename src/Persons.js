import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "./Person";
import * as actionTypes from "./store/action";

class Persons extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onAddedPerson}>Add Person</button>
        {this.props.prs.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onRemovedPerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    prs: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddedPerson: () => dispatch({ type: actionTypes.ADD }),
    onRemovedPerson: id => dispatch({ type: actionTypes.REMOVE, personId: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);
