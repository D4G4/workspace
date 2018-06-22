import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { employeeUpdateAction, createEmployeeAction } from '../actions';
import { Card, CardSection, EditText, Button } from './common';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.createEmployeeAction({ name, phone, shift: shift || 'Monday' }); //Nice
  }

  render() {
    return (
      <Card>
        <CardSection>
          <EditText
            label="Name"
            placeholder="Employee Name"
            value={this.props.name}
            onChangeText={text => this.props.employeeUpdateAction({ key: 'name', value: text })}
          />
        </CardSection>

        <CardSection>
        <EditText
          label="Phone"
          placeholder="555-555-555"
          keyboardType='numeric'
          maxLength={10}
          value={this.props.phone}
          onChangeText={value =>
            this.props.employeeUpdateAction({ key: 'phone', value })}  //used ES6
        />
        </CardSection>


        <CardSection style={{ flexDirection: 'row' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={day =>
              this.props.employeeUpdateAction({ key: 'shift', value: day })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thrusday" value="Thrusday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Satuday" />
            <Picker.Item label="Sunday" value="Sunday" />

          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

        //TODO: That trick

const styles = {
  pickerTextStyle: {
      fontSize: 18,
      paddingLeft: 20,
      borderBottomWidth: 1,
      borderColor: '#ddd',
      flex: 1
  }
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeFormReducer;

  return { name, phone, shift };
};

export default connect(mapStateToProps,
   { employeeUpdateAction, createEmployeeAction }
 )(EmployeeCreate);
