import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values:{firstName,lastName,email,occupation,city,bio} } = this.props;
        //   this.props.values;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar
                        title="Confirm User Data..."
                    />
                    <List>
                        <ListItem 
                            primaryText="First Name"
                            secondaryText={firstName}
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={lastName}
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="First Name"
                            secondaryText={firstName}
                        />
                        <ListItem
                            primaryText="Occupation"
                            secondaryText={occupation}
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText={city}
                        />
                        <ListItem
                            primaryText="Bio"
                            secondaryText={bio}
                        />
                    </List>
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

export default Confirm;
