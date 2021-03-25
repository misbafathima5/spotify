import React, { Component, Fragment } from 'react';
import firebase from "../../firebase";
import "./auth.css";
import { toast } from "react-toastify";
import md5 from 'md5';
class SignUp extends Component {
    state = {
        email: "",
        confirmEmail: "",
        password: "",
        profile: "",
        dob: "",
        gender: "",
    };
    handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
      e.preventDefault();
      try {
          let { email, confirmEmail, password, profile, dob, gender } = this.state;
          console.log({ email, confirmEmail, password, profile, dob, gender });
          //auth
          let userData = await firebase.auth().createUserWithEmailAndPassword(email, password);
          userData.user.sendEmailVerification();
          let message = `verification mail has been sent to ${email} please confirm it and signin...`;
          toast.success(message);
          console.log(userData)
           await userData.user.updateProfile({
              displayName: profile,
              photoUrl: `http://www.gravatar.com/avatar/${md5(email)}?d=identicon`
          });
          //store information into firebase realtime  database
          await firebase.database().ref("users/" + userData.user.uid)
              .set({
                  username:userData.user.displayName,
              email: userData.user.email,
              photoURL: userData.user.photoURL,
        registraionDate: new Date().toLocaleDateString(),
                      
          })
          
      } catch (error) {
          console.log(error);
          toast.error(error.message);
      }
    
  };
    render() {
        let { email, confirmEmail, password, profile, dob, gender } =
            this.state;
        return (
            <Fragment>
                <section id="authSection" className="col-md-4 mx-auto my-2 card">
                    <article className="card-body">
                        <h4>Sign Up with your email address</h4>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>What's your email?</label>
                                <input type="email" name="email" onChange={this.handleChange} value={email} className="forms-control" placeholder="Enter your email"/>
                            </div>
                            {/*----emails ends-----*/}
                            <div className="form-group">
                                <label>Confirm your email</label>
                                <input type="email" name="confirmEmail" onChange={this.handleChange} value={confirmEmail} className="forms-control" placeholder="Enter your email again"/>
                            </div>
                            {/*----ends confrm emails -----*/}
                            <div className="form-group">
                                <label>Create a password</label>
                                <input type="text" name="password"onChange={this.handleChange} value={password} className="forms-control" placeholder="Create a password"/>
                            </div>
                            {/*----ends password -----*/}
                            <div className="form-group">
                                <label>What should we call you?</label>
                                <input type="text"name="profile"onChange={this.handleChange} value={profile} className="forms-control" placeholder="Enter a profile name "/>
                            </div>
                            {/*----ends profile-----*/}
                            <div className="form-group">
                                <label>What's your date of birth</label>
                                <input type="datetime-local" name="dob"onChange={this.handleChange} value={dob} className="forms-control" placeholder="Enter a profile name "/>
                            </div>
                            {/*----ends date of birth-----*/}
                            <div className="form-group">
                                <label>What's your gender?</label>
                                <input type="radio" name="gender" onChange={this.handleChange} value={gender}/>
                                Male
                                <input type="radio" name="gender"onChange={this.handleChange} value={gender} />
                                Female
                                <input type="radio" name="gender" onChange={this.handleChange} value={gender} />
                                Non-Binary
                            </div>
                            {/*----ends gender-----*/}
                            <div className="form-group">
                                <input type="checkbox" name="checkdata" />
                                Share my registration data with spotify's content  providers for marketing purposes.
                            </div>
                            {/*----ends checkdata-----*/}
                            <p>By clicking on sign up, you agree to spotify's<a href="/">Terms and condition use.</a></p>
                            <p>To learn more about how spotify collects, uses, shares and protexts your personal data please read spotify's
                                <a href="/">Privacypolicy</a></p>
                            <div className="form-group">
                                <button className="btn btn-success btn-block">Sign Up</button>
                            </div>
                            
                        </form>
                    </article>
                </section>
            </Fragment>
          );
    }
}
 
export default SignUp;