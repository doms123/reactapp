import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from '../components/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <List />
        {this.props.user.name}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        todo: state.todo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);