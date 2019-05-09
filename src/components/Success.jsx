import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
// import FormUserDetails from './FormUserDetails';

export class Success extends Component {
    
    back = e => {
        // e.preventDefault();
        // this.props.prevStep();
        // <FormUserDetails />
    }
    render() {
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar
                        title="success..."
                    />
                    <h1>***Thank You For Your Submission ***</h1>
                    <h4>you will got an email with further instructions.</h4>
                    <br />
                    <RaisedButton
                        label="DONE"
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

export default Success;
