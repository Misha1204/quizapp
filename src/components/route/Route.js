import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Categories from "../categories/Categories";
import Questions from "../questions/Questions";
import Difficulties from "../difficulties/Difficulties";
import "./route.css";

export default class QuizApp extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  //CREATE ROUTES
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Categories} />
          <Route path="/Categories" component={Categories} />
          <Route path="/:category/Difficulties" component={Difficulties} />
          <Route
            path="/:category/:difficulty/Questions"
            component={Questions}
          />
        </Switch>
      </Router>
    );
  }
}
