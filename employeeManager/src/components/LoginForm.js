import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, CardSection, EditText, Button, Spinner } from './common';
import { actEmailChanged, actPasswordChanged, actLoginUser } from '../actions';

class LoginForm extends Component {

  onEmailChange(text) {
      this.props.actEmailChanged(text);
  }

  onPasswordChange(text) {
    this.props.actPasswordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.actLoginUser({ email, password });
  }

  renderErrorMessage() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white', margin: 10 }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.isLoading) {
      return <Spinner size="large" />;
    }
    return (
      <Button
        onPress={this.onButtonPress.bind(this)}
      >
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card >
        <CardSection>
          <EditText
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}  //TODO:try not using binda
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <EditText
            isSecureTextEntry
            label="Password"
            placeholder="password"
            //Because we want to reference this in the callback
            onChangeText={(password) => this.onPasswordChange(password)}
            value={this.props.password}
          />
        </CardSection>

        {this.renderErrorMessage()}

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

//TODO: Use this.state
const mapStateToProps = state => {
  const { emailStateKeyFromReducer,
          passwordStateKeyFromReducer,
          errorStateKeyFromReducer,
          loadingStateKeyFromReducer
        } = state.authenticationReducer;
  return {
      email: emailStateKeyFromReducer,
      password: passwordStateKeyFromReducer,
      error: errorStateKeyFromReducer,
      isLoading: loadingStateKeyFromReducer
    };
};

export default connect(mapStateToProps,
   { actEmailChanged, actPasswordChanged, actLoginUser })(LoginForm);
