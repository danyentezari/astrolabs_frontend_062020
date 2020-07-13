import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from './NavBar.js';

const RegistrationPage = () => {

    const [state, setState] = useState(
        {
            registered: false,
            loading: false
        }
    );

    // These will be assigned values by React
    let firstNameField;
    let lastNameField;
    let emailField;
    let passwordField;

    const registerUser = () => {
        // console.log(
        //     firstNameField.value,
        //     lastNameField.value,
        //     emailField.value,
        //     passwordField.value
        // )

        setState(
            { 
                ...state,
                loading: true
            }
        )

        fetch('http://localhost:8080/users/register', {
            method: 'POST',
            body: JSON.stringify({
                firstName: firstNameField.value,
                lastName: lastNameField.value,
                email: emailField.value,
                password: passwordField.value
            }),
            headers: {"Content-Type": "application/json"}
        })
        .then(
            (response)=>response.json()
        )
        .then(
            (json)=> {
                const { message } = json;
                if(message === "User has been saved") {
                    //
                    setState(
                        {
                            ...state,
                            registered: true,
                            loading: false
                        }
                    )
                } else {
                    alert("Please check all the fields");
                    setState(
                        {
                            loading: false
                        }
                    )
                }
            }
        )
    }

    // If the user is registered, redirect them
    if(state.registered === true) {
        return (<Redirect to="/login"/>)
    }

    // Otherwise, show the registration form
    else {
        return(
            <div>
                <NavBar />
                <h1>Registration</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-sm" 
                        style={{maxWidth: '400px', margin: '0 auto'}}>
                            <div>
                                <div className="form-group">
                                    <label>
                                        First Name
                                    </label>

                                    <input 
                                    ref={(comp)=>firstNameField = comp}
                                    type="text" 
                                    className="form-control" 
                                    aria-describedby="firstName"/>
                                </div>

                                <div className="form-group">
                                    <label>
                                        Last Name
                                    </label>

                                    <input 
                                    ref={(comp)=>lastNameField = comp}
                                    type="text" 
                                    className="form-control" 
                                    aria-describedby="lastName"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">
                                        Email address
                                    </label>

                                    <input 
                                    ref={(comp)=>emailField = comp}
                                    type="email" 
                                    className="form-control" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp"/>

                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>

                                <div className="form-group">
                                    <label>
                                        Password
                                    </label>

                                    <input 
                                    ref={(comp)=>passwordField = comp}
                                    type="password" 
                                    className="form-control" 
                                    aria-describedby="password"/>
                                </div>

                                <button
                                onClick={registerUser}
                                type="button"
                                className="btn btn-primary">Register
                                </button>

                                {
                                 state.loading && 
                                 <div className="loader">
                                    <svg className="circular" viewBox="25 25 50 50">
                                        <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
                                    </svg>
                                </div>
                                 }
                        </div>
                    </div>
                </div>
              </div>
            </div>
        )
    }
}

export default RegistrationPage;