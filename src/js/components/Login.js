import React from 'react';
import Header from '../containers/Header';
import Example from './Example';
import {
    Alert
} from 'reactstrap';

export default class Login extends React.Component {
    doLogin(event) {
        event.preventDefault();
        console.log('Do login..');
    }
    render() {
        return (
            <div className="container">
            <Alert color="primary">
                กรุณาระบุตัวตนเพื่อใช้งานระบบบริหารการเชื่อมต่อ
            </Alert>
            <div className="container">
                <form className="form-signin" method="POST" onSubmit={this.doLogin}>
                    <label for="inputID" className="sr-only">User ID</label>
                    <input type="text" id="inputID" className="form-control" placeholder="User ID" required="" autofocus="" />
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" value="remember-me" />Remember me
                            </label>
                        </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                </form>
            </div>
            </div>
                        );
    }
}