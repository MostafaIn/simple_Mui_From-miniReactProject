import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values,handleChange,handleBlur,firstNameError,lastNameError,emailError} = this.props;
        //   this.props.values;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar
                        title="Enter user details..."
                    />
                    <TextField
                        // name="firstName"
                        hintText="Enter your first name here"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                        onBlur={handleBlur}
                        // error={firstNameError}
                    />
                    <br />
                    <small style={styles.small}>{firstNameError}</small>
                    <br />
                    <TextField
                        // name="lastName"
                        hintText="Enter your last name here"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                        onBlur={handleBlur}
                        // error={lastNameError}
                    />
                    <br />
                    <small style={styles.small}>{lastNameError}</small>
                    <br />
                    <TextField
                        // name="email"
                        hintText="Enter your email here"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                        onBlur={handleBlur}
                        // error={emailError}
                    />
                    <br />
                    <small style={styles.small}>{emailError}</small>
                    <br />
                    <RaisedButton
                        label="continue"
                        primary={true}
                        onClick={this.continue}
                        style={styles.button}
                    />

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    button: { margin: 15 },
    small: { color: 'red' }
}

export default FormUserDetails
