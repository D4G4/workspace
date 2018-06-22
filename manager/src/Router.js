import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

/*
Requirement of router-flux : A router must have immediate parent <Scene>
*/
const RouterComponent = () => (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth" >
          <Scene
          key="login"
          component={LoginForm}
          title="Please Login"
          />
        </Scene>
        <Scene
          key="main"
          initial
        >
          <Scene
          rightTitle="Add"
          onRight={() => { Actions.employeeCreate(); }}   //compulsory
          key="employeeList"
          component={EmployeeList}
          title="Employee List"
          initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );

export default RouterComponent;
