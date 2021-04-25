import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

export default class Categories extends React.Component {
  constructor(props) {
    super();
    this.state = { categories: [], questions: [] };
  }

  //FETCH API
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

  //RENDER CATEGORIES TO THE DISPLAY
  render() {
    const categories = this.state.categories;
    const questions = this.state.questions;

    return (
      <div className="main_container">
        <h2>Choose Your Favourite Category</h2>
        <div className="btn_container">
          {categories.map((category, id) => {
            return (
              <Link
                key={id}
                className="category"
                to={{
                  pathname: `${category}/Difficulties`,
                  state: {
                    questions: questions.filter(
                      (obj) => obj["category"] === category
                    ),
                  },
                }}
              >
                <button className="btn">{category}</button>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
