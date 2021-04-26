import React from "react";
import { Link } from "react-router-dom";
import "./difficulties.css";

export default class Difficulties extends React.Component {
  constructor(props) {
    super();
    this.state = { difficulties: ["easy", "medium", "hard"] };
  }

  //RENDER DIFFICULTIES TO THE DISPLAY
  render() {
    const difficulties = this.state.difficulties;
    const questions = this.props.location.state.questions;

    return (
      <div className="main_container_difficulties">
        <header className="difficulties_header">
          <h2>Please choose the difficulty</h2>
        </header>
        <main className="btn_container">
          {difficulties.map((difficulty, index) => {
            return (
              <Link
                key={index}
                to={{
                  pathname: `/${this.props.match.params.category}/${difficulty}/Questions`,
                  state: {
                    questions: questions.filter(
                      (obj) => obj["difficulty"] === difficulty
                    ),
                  },
                }}
              >
                <button className="btn">{difficulty}</button>
              </Link>
            );
          })}
        </main>
      </div>
    );
  }
}
