import React, { Component } from 'react';
//React Router 
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './login/Login';
import Index from './index/Index';

const mapStateToProps = (state, props) => {
    return {
    }
}
const mapDispatchToProps = (dispatch, props) => {
  const actions = {
  
  };
  return actions;
}

class App extends Component {
    render() {
        return (
            <main>
                <Switch>
                    
                    <Route exact path="/" component={Index}/> 
                    <Route path="/iniciar-sesion" component={() => <li>Hola</li>}/> 
                </Switch>
            </main>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));