import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Categories from "../categories/Categories";
import Questions from "../questions/Questions";
import Difficulties from "../difficulties/Difficulties";
import "./feed.css";

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

// class Categories extends React.Component {
//   constructor(props) {
//     super();
//     this.state = { categories: [], questions: [] };
//   }

//   //FETCH API
//   componentDidMount() {
//     fetch("https://opentdb.com/api.php?amount=50&type=multiple")
//       .then((res) => res.json())
//       .then((data) => {
//         this.setState({
//           categories: [...new Set(data.results.map((obj) => obj.category))],
//           questions: data.results,
//         });
//       });
//   }

//   //RENDER CATEGORIES TO THE DISPLAY
//   render() {
//     const categories = this.state.categories;
//     const questions = this.state.questions;

//     return (
//       <div className="main_container">
//         <h2>Choose Your Favourite Category</h2>
//         <div className="btn_container">
//           {categories.map((category, id) => {
//             return (
//               <Link
//                 key={id}
//                 className="category"
//                 to={{
//                   pathname: `${category}/Difficulties`,
//                   state: {
//                     questions: questions.filter(
//                       (obj) => obj["category"] === category
//                     ),
//                   },
//                 }}
//               >
//                 <button className="btn">{category}</button>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// class Difficulties extends React.Component {
//   constructor(props) {
//     super();
//     this.state = { difficulties: ["easy", "medium", "hard"] };
//   }

//   //RENDER DIFFICULTIES TO THE DISPLAY
//   render() {
//     const difficulties = this.state.difficulties;
//     const questions = this.props.location.state.questions;

//     return (
//       <div className="main_container">
//         <h2>Choose Difficulty</h2>
//         <div className="btn_container">
//           {difficulties.map((difficulty, index) => {
//             return (
//               <Link
//                 key={index}
//                 to={{
//                   pathname: `/${this.props.match.params.category}/${difficulty}/Questions`,
//                   state: {
//                     questions: questions.filter(
//                       (obj) => obj["difficulty"] === difficulty
//                     ),
//                   },
//                 }}
//               >
//                 <button className="btn">{difficulty}</button>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// class Questions extends React.Component {
//   constructor(props) {
//     super();
//     this.state = { index: 0, score: 0 };
//     this.checkAnswer = this.checkAnswer.bind(this);
//     this.shuffleArray = this.shuffleArray.bind(this);
//   }

//   //CHECKS IF THE ANSWER IS TRUE OR NOT AND INCREASES USER SCORE
//   checkAnswer(event) {
//     const correct_answer = this.props.location.state.questions[this.state.index]
//       .correct_answer;

//     let isCorrect = event.target.innerHTML === correct_answer;
//     this.setState((state) => ({
//       index: state.index + 1,
//       score: state.score + (isCorrect ? 1 : 0),
//     }));
//   }

//   //SHUFFLES ARRAY SO THAT ANSWERS EVERY TIME WERE IN DIFFERENT SEQUENCE
//   shuffleArray(array) {
//     let i = array.length - 1;
//     for (; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       const temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//     return array;
//   }

//   render() {
//     const questions = this.props.location.state.questions;

//     if (questions.length > 0) {
//       if (this.state.index < questions.length) {
//         return (
//           <div className="main_container">
//             <div className="category_question_container">
//               <h2>{`Category - ${this.props.match.params.category}`}</h2>
//               <p key={this.state.index}>
//                 {this.props.location.state.questions[this.state.index][
//                   "question"
//                 ].replaceAll(/&quot;/gi, '"')}
//               </p>
//             </div>
//             <div className="btn_container">
//               {this.shuffleArray([
//                 ...this.props.location.state.questions[this.state.index]
//                   .incorrect_answers,
//                 this.props.location.state.questions[this.state.index]
//                   .correct_answer,
//               ]).map((choice) => {
//                 return (
//                   <button
//                     className="btn"
//                     key={choice}
//                     onClick={this.checkAnswer}
//                   >
//                     {choice}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         );
//       } else {
//         return (
//           <div className="main_container">
//             <h1>
//               You scored {this.state.score} from {questions.length}
//             </h1>
//             <Link to="/">
//               <button className="btn">Take another quiz</button>
//             </Link>
//           </div>
//         );
//       }
//     } else {
//       return (
//         <div className="main_container">
//           <h1>
//             There are no questions. Please choose another category or
//             difficulty.
//           </h1>
//           <Link to="/">
//             <button className="btn">Choose different quiz</button>
//           </Link>
//         </div>
//       );
//     }
//   }
// }
