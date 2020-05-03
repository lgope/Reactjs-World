import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
  continue = (event) => {
    event.preventDefault();

    // PROCESS FORM (Send data to backend) /////

    this.props.nextStep();
  };

  back = (event) => {
    event.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar title='Confirm User Data' />
          <List>
            <ListItem primaryText='First Name' secondaryText={firstName} />
            <ListItem primaryText='Last Name' secondaryText={lastName} />
            <ListItem primaryText='Email' secondaryText={email} />
            <ListItem primaryText='Occupation' secondaryText={occupation} />
            <ListItem primaryText='City' secondaryText={city} />
            <ListItem primaryText='Bio' secondaryText={bio} />
          </List>
          <br />
          <RaisedButton
            label='Confirm & Continue'
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label='Back'
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default Confirm;
