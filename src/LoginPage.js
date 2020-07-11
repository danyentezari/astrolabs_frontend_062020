import React from 'react';
import NavBar from './NavBar.js';

const LoginPage = () => {
    return(
        <div>
             <NavBar />
             <h1>Login</h1>

            <div className="container">
                <div className="row">
                    <div className="col-sm" 
                    style={{maxWidth: '400px', margin: '0 auto'}}>
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">
                                    Email address
                                </label>
                                <input type="email" 
                                className="form-control" 
                                id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" 
                                className="form-control" 
                                id="exampleInputPassword1"/>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" 
                                className="form-check-input" 
                                id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
          </div>
        </div>
    )
}

export default LoginPage;