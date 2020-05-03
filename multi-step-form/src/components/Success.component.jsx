import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title='Success' />
          <h1>Thank You For Your Submission</h1>
          <p>You'll get an email with further instructions</p>
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
