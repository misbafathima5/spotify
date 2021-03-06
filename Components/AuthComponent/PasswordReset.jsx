import React, { Component, Fragment } from 'react'
import { withRouter, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import firebase from "../../firebase";
class PasswordReset extends Component {
    state = {
        email: ""
    };
    handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

    handleSubmit = async e => {
        let { email } = this.state;
        try {
            e.preventDefault();
            await firebase.auth().sendPasswordResetEmail(email);
            toast.success(`reset password has been sent to ${email} please reset password`);
            this.props.history.push("/signin");
        } catch (err) {
            toast.error(err.message);
            this.props.history.push("/password-reset");
        }
  };
   
    render() {
        let { email } = this.state;
        return (
           
            <Fragment>
                <section id="authSection" className="col-md-4 mx-auto my-2 card">
                    <article className="card-body">
                        <h1 className="text-center"> Password reset.</h1>
                        <p>Enter your spotify username,or the email <address> that you used to register.we'll send you an eamil with your username and a link to reset your password</address></p>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">email or username</label>
                                <input type="email" name="email" id="email"value={email} onChange={this.handleChange} placeholder="email or username"/>
                            </div>
                           
                            
                            <div className="form-group">
                                
                                <button>Reset Password</button>
                                
                            </div>
                            <div className="form-group">
                                <Link to="/Signin">Login</Link>
                            </div>
                        </form>
                    </article>
                </section>
                
            </Fragment>
         );
    }
}
 
export default withRouter(PasswordReset);