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
      stepNumber: 0,
      xIsNext: true,
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
      rows.push(<Row columnIdentifier={y} />);
    }
    return <div>{rows}</div>;
  }
}

class Row extends React.Component {
  render() {
    let slots = [];
    for (let y = 0; y < 7; y++) {
      slots.push(<Slot coordinate={[this.props.columnIdentifier, y]} />);
    }
    return <div className="board-row">{slots}</div>;
  }
}

// function Row(props) {
//   return (
//     <div className="board-row">
//       <Slot coordinate={[props.columnIdentifier, 0]} />
//       <Slot coordinate={[props.columnIdentifier, 1]} />
//       <Slot coordinate={[props.columnIdentifier, 2]} />
//       <Slot coordinate={[props.columnIdentifier, 3]} />
//       <Slot coordinate={[props.columnIdentifier, 4]} />
//       <Slot coordinate={[props.columnIdentifier, 5]} />
//       <Slot coordinate={[props.columnIdentifier, 6]} />
//     </div>
//   );
// }

function Slot(props) {
  return <div class="slot" coordinate={props.coordinate}></div>;
}
// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
