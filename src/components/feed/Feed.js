import React from "react";
import "./feed.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

export default class Feed extends React.Component {
  constructor() {
    super();
    this.state = { categories: [], questions: [] };
  }

  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=50&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          categories: [...new Set(data.results.map((obj) => obj.category))],
          questions: data.results,
        });
      });
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact={true} path="/">
              <DisplayCategory categories={this.state.categories} />
            </Route>
            <Route path="/categories">
              <DisplayCategory categories={this.state.categories} />
            </Route>
            <Route path={`/difficulty`}>
              <DisplayDifficulty />
            </Route>
            <Route path="/:category//questions">
              <DisplayQuestion />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

class DisplayCategory extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="main_container">
        {this.props.categories.map((category) => (
          <div className="btn_container">
            <button className="category_btn">
              <Link to={{ pathname: "/difficulty", state: category }}>
                {category}
              </Link>
            </button>
          </div>
        ))}
      </div>
    );
  }
}

class DisplayDifficulty extends React.Component {
  constructor(props) {
    super();
    console.log(props);
  }

  render() {
    return (
      <div className="main_container">
        <div>
          <button className="category_btn">
            <Link to="/questions">Easy</Link>
          </button>
          <button className="category_btn">
            <Link to="/questions">Medium</Link>
          </button>
          <button className="category_btn">
            <Link to="/questions">Hard</Link>
          </button>
        </div>
      </div>
    );
  }
}

class DisplayQuestion extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <h1>aisdjaid</h1>
      </div>
    );
  }
}
