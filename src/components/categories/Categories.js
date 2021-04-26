import React from "react";
import { Link } from "react-router-dom";

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
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }

  //RENDER CATEGORIES TO THE DISPLAY
  render() {
    const categories = this.state.categories;
    const questions = this.state.questions;

    return (
      <div className="main_container categories">
        <header className="categories_header">
          <h1>Welcome to our quiz game!</h1>
          <h2>Please choose your favourite category</h2>
        </header>
        <main className="btn_container">
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
        </main>
      </div>
    );
  }
}
