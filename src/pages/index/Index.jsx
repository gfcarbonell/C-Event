import React, { Component } from 'react';
//React Router 
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from '../../widgets/AppBar';
import Slider from '../../widgets/Slider';


const mapStateToProps = (state, props) => {
    return {
    }
}
const mapDispatchToProps = (dispatch, props) => {
  const actions = {
  
  };
  return actions;
}

class Index extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <Slider />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));