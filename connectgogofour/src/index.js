import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      // turns: 0,
      // xIsNext: turns % 2 === 0,
    };
  }

  render() {
    return <Board />;
  }
}

class Board extends React.Component {
  render() {
    let rows = [];
    for (let y = 0; y < 6; y++) {
      rows.push(<Row slotdentifier={y} />);
    }
    return <div className="container"><SubmitRow />{rows}</div>;
  }
}

class SubmitRow extends React.Component {
  render() {
    let slots = [];
    for (let y = 0; y < 7; y++) {
      slots.push(<SubmitSlot columnIdentifier={y} />);
    }
    return <div className="submit-board-row">{slots}</div>;
  }
}

class Row extends React.Component {
  render() {
    let slots = [];
    for (let x = 0; x < 7; x++) {
      slots.push(<Slot coordinates={[x, this.props.slotdentifier]} />);
    }
    return <div className="board-row">{slots}</div>;
  }
}

function SubmitSlot(props) {
  return <div class="submit-slot" columnIdentifier={props.columnIdentifier}></div>;
}

function Slot(props) {
  return <div class="slot" coordinates={props.coordinates}></div>;
}
// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
