import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleChange } = this.props;
        //   this.props.values;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar
                        title="Enter personal details..."
                    />
                    <TextField
                        hintText="what is your occupation"
                        floatingLabelText="occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br />
                    <TextField
                        hintText="which city do you live"
                        floatingLabelText="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br />
                    <TextField
                        hintText="write your bio here"
                        floatingLabelText="bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <br />
                    <RaisedButton
                        label="continue"
                        primary={true}
                        onClick={this.continue}
                        style={styles.button}
                    />
                    <RaisedButton
                        label="back"
                        primary={false}
                        onClick={this.back}
                        style={styles.button}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const styles = {
    button: { margin: 15 }
}

export default FormUserDetails
