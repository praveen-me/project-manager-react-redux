import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Dashboard} /> 
            <Route path="/project/:id" component={ProjectDetails}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/create" component={CreateProject} />
            <Route render={() => {
              return <h1 className="red-text center">404 : Page Not Found</h1>
            }}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
