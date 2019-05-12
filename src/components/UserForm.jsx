import React, { Component } from 'react';
import FromUserDetails from './FormUserDetails';
import FromPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
export class UserForm extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
        error: '',
        touched: { firstName: false, lastName: false, email: false }
    }
    //proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    // proceed the prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    // handle fields change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };
    Done = () => {
        // const { step } = this.state;
        // this.setState({
        //     step: true
        // });
        console.log('me');

    };
    handleBlur = e => {
        console.log(e.target.value);
        // this.validation();
    };
    validation = () => {
        const errors = { firstName: '', lastName: '', email: '' };
        // const { firstName, lastName, email } = this.state.touched;
        if (!this.state.firstName.match(/^[a-zA-Z]{3,15}$/)) {
            errors.firstName = 'first name must at least 3 characters.'
        }
        if (!this.state.lastName.match(/^[a-zA-Z]{3,15}$/)) {
            errors.lastName = 'last name must at least 3 characters.'
        }
        if (!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            errors.email = ' yourID@example.com'
        }
        return errors;
    };
    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio };
        const errors = this.validation();
        switch (step) {
            case 1:
                return (<FromUserDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    handleBlur={this.handleBlur}
                    firstNameError={errors.firstName}
                    lastNameError={errors.lastName}
                    emailError={errors.email}
                />)
            case 2:
                return (<FromPersonalDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />)
            case 3:
                return (<Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />)
            case 4:
                return (<Success
                    done={this.Done}
                />)
            default: return 0;
        }
    }
}

export default UserForm
