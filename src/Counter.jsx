import React from "react";
import ReactDOM from "react-dom";
const SecondsCounter = (props) => {
  return (
    <>
      <div className="container">
        <div className="container-sm ceros   border rounded  ">
        <i className="bi bi-clock" ></i></div>
        <div className="container-lg ceros  border rounded  ">
          {props.counterCinco % 10}
        </div>
        <div className="container-lg ceros  border rounded  ">
          {props.counterCuatro % 10}
        </div>
        <div className="container-xl ceros  border rounded  ">
          {props.counterTres % 10}
        </div>
        <div className="container-xl ceros border rounded  ">
          {props.counterDos % 10}
        </div>
        <div className="container-xl ceros  border rounded  ">
          {props.counterUno % 10}
        </div>
      </div>
    </>
  );
};
// import SecondsCounter from './Counter';
export default SecondsCounter;

let counter = 1;
let counterUno = 0;
let counterDos = 0;
let counterTres = 0;
let counterCuatro = 0;
let counterCinco = 0;


setInterval(() => {
  counterUno = Math.floor(counter / 1);
  counterDos = Math.floor(counter / 10);
  counterTres = Math.floor(counter / 100);
  counterCuatro = Math.floor(counter / 1000);
  counterCinco = Math.floor(counter / 10000);

ReactDOM.render(
  <SecondsCounter
    counterUno={Number(counterUno || 0)}
    counterDos={counterDos}
    counterTres={counterTres}
    counterCuatro={counterCuatro}
    counterCinco={counterCinco}
    // countersix={countersix}
  />,
  document.querySelector("#root")
  );
  console.log(counterUno, counterDos, counterTres, counterCuatro, counterCinco)
  counter++;
}, 1000);
