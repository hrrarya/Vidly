import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Movie from "./services/movie";
import Customars from "./services/customars";
import Rentals from "./services/rentals";
import NotFound from "./services/not-found";
import Navbar from "./services/navbar";
import MovieForm from "./services/movieForm";
import LoginForm from "./services/loginForm";
import "./index.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movie} />
            <Route path="/customars" component={Customars} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
