import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, EditText, Spinner } from './common';

class LoginForm extends Component {

/*
  We are not letting the text exist as a TextInput,
   rather we are saving it into a variable named text
 */
  state = { email: '', password: '', error: '', loading: false };

  onButtonPressFunction() {
    const { email, password } = this.state;

    console.log('email', email, ' password: ', password);

    this.setState({ error: '', loading: true });

/*
  We have to bind the context coz this is an asynchronous class and
  we don't know the context that it will be called with,
  we have to bind the context
  NOTE you don not have a set of () after the function name
*/

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(signUpError => {
            this.onLoginFail.bind(this, `Sign up failed ${signUpError.message}`);
          });
      });
      /*
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
        */
  }//end of onButtonPressFunction

  onLoginSuccess(response) {
    const successMessage = response.message;
    console.log(`onLoginSuccess ${successMessage}`);
    this.setState({
      email: '',
      password: '',
      error: 'Login successful',
      loading: false });
  }

  onLoginFail() {
    console.log('onLoginFailed ');
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner spinnerSize="small" />;
    }
    return (
      <Button onPressedProp={this.onButtonPressFunction.bind(this)} >
       Log In
      </Button>
    );
  }

  render() {
    return (
      <Card>

        <CardSection>
          <EditText
          onChangeText={userInput => this.setState({ email: userInput })}
          labelText={'Email'}
          placeholder="user@email.com"
          value={this.state.email}
          />
        </CardSection>

        <CardSection>
          <EditText
            onChangeText={userInput => this.setState({ password: userInput })}
            labelText={'Password'}
            placeholder="***********"
            isSecureTextEntry
            value={this.state.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>

    );
  }//end of render
}
  const styles = {
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    }
  };

export default LoginForm;
