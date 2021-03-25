import React, { Component ,Fragment } from 'react'
import { Link } from 'react-router-dom';
class SignIn extends Component {
    state = {};
    render() { 
        return (
            <Fragment>
                <section id="authSection" className="col-md-4 mx-auto my-2 card">
                    <article className="card-body">
                        <h4> To continue, log in to spotify.</h4>
                        <p style={{
                            padding:"10px",
                            width:"100%",
                            border:"1px solid #111",
                            borderRadius:"20px",
                            textAlign:"center",
                            margin:"10px auto",
                        }}>
                            <Link to="/phone-auth"
                                style={{
                                    textDecoration: "none",
                                    color:"#555",
                                }}> continue with phone number</Link>

                        </p>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">email or username</label>
                                <input type="email" name="email" id="email" placeholder="email or username"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">password</label>
                                <input type="text" name="password" id="password" />
                            </div>
                            <p>
                                <Link to ="/password-reset">Forgot a password</Link>
                            </p>
                            <div className="form-group">
                                <input type="checkBox" name="" id="" />remember me
                                <button>login</button>
                            </div>
                        </form>
                    </article>
                </section>
                
            </Fragment>
         );
    }
}
 
export default SignIn;