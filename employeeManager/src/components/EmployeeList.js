import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import _ from 'lodash';   // low dash
import { employeesFetchAction } from '../actions';
import ListItem from './ListItem';


class EmployeeList extends Component {

  componentWillMount() {
    this.props.employeesFetchAction();    //Asynchronous code
    this.createDataSource(this.props);
  }

  /*
  It get's called WITH new set of props (whenever new props comes to the component)
  NOTE `this.props` is still the old set of props
  */
  componentWillReceiveProps(updatedProps) {
    console.log('New props received in EmployeeList');
    console.log(updatedProps);
    this.createDataSource(updatedProps);
  }

  //createDataSource(anyProps) {
  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    console.log('EmployeeList -> render()');
    console.log(this.props);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  console.log('Inside mapStateToPtops');
  console.log(state);
  //For every state of employee, get employeeModel and it's UID
  const employees = _.map(state.employeeReducer, (val, keyUID) => ({ ...val, keyUID }));
  return { employees };
};

export default connect(mapStateToProps, { employeesFetchAction })(EmployeeList);
