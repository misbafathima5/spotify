import React, { Component, Fragment } from "react";
import SignUp from "./Components/AuthComponent/SignUp";
import SpotifyNavbar from "./Components/HeaderComponent/SpotifyNavbar";
import Home from "./Components/HomeComponent/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import SignIn from "./Components/AuthComponent/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PasswordReset from "./Components/AuthComponent/PasswordReset";
import PhoneAuth from "./Components/AuthComponent/PhoneAuth";
class App extends Component {
  state = {
    userInfo: "",
  };
  render() {
    return (
      <Fragment>
        <Router>
          <header>
            <SpotifyNavbar user={this.state.userInfo} />
          </header>
          <ToastContainer />
          <Switch>
            <main>
              <Route path="/" exact component={Home} />
              <Route path="/signin" exact component={SignIn} />
              <Route path="/signup" exact component={SignUp} />
              <Route
                path="/password-reset"
                exact
                component={PasswordReset}
              ></Route>
              <Route path="/Phone-auth" exact component={PhoneAuth} />
              <Route path="/*" component={PageNotFound} />
            </main>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
