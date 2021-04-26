import React from "react";
import { Link } from "react-router-dom";
import "./questions.css";

export default class Questions extends React.Component {
  constructor(props) {
    super();
    this.state = { index: 0, score: 0 };
    this.checkAnswer = this.checkAnswer.bind(this);
    this.shuffleArray = this.shuffleArray.bind(this);
  }

  //CHECKS IF THE ANSWER IS TRUE OR NOT AND INCREASES USER SCORE
  checkAnswer(event) {
    const correct_answer = this.props.location.state.questions[this.state.index]
      .correct_answer;

    let isCorrect = event.target.innerHTML === correct_answer;
    this.setState((state) => ({
      index: state.index + 1,
      score: state.score + (isCorrect ? 1 : 0),
    }));
  }

  //SHUFFLES ARRAY SO THAT ANSWERS EVERY TIME WERE IN DIFFERENT SEQUENCE
  shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  render() {
    const questions = this.props.location.state.questions;

    if (questions.length > 0) {
      if (this.state.index < questions.length) {
        return (
          <div className="main_container_questions">
            <header className="questions_header">
              <h2>{`Category - ${this.props.match.params.category}`}</h2>
              <p key={this.state.index}>
                {this.props.location.state.questions[this.state.index][
                  "question"
                ].replaceAll(/&quot;/gi, '"')}
              </p>
            </header>
            <main className="btn_container">
              {this.shuffleArray([
                ...this.props.location.state.questions[this.state.index]
                  .incorrect_answers,
                this.props.location.state.questions[this.state.index]
                  .correct_answer,
              ]).map((choice) => {
                return (
                  <button
                    className="btn"
                    key={choice}
                    onClick={this.checkAnswer}
                  >
                    {choice}
                  </button>
                );
              })}
            </main>
          </div>
        );
      } else {
        return (
          <div className="main_container_game_over">
            <h1>
              You scored {this.state.score} from {questions.length}
            </h1>
            <Link to="/">
              <button className="btn">Take another quiz</button>
            </Link>
          </div>
        );
      }
    } else {
      return (
        <div className="main_container_no_questions">
          <h1>
            There are no questions. Please choose another category or
            difficulty.
          </h1>
          <Link to="/">
            <button className="btn">Choose different quiz</button>
          </Link>
        </div>
      );
    }
  }
}
