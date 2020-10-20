import "./app.css";
import { createElement } from "./element";

export function App() {
  const app = createElement("div", {
    className: "app",
    children: [
      createElement("div", {
        className: "time",
        innerText: 10,
      }),
      createElement("input", {
        className: "Input_Number",
      }),
      createElement("button", {
        classname: "startTimeButton",
        innerText: "Go!",
        onclick: () => {
          // createCountdownTimer();
          CountdownSubmit(getNumber());
        },
      }),
    ],
  });

  function CountdownSubmit(sec) {
    console.log(sec);
    let intervalId = setInterval(function () {
      document.querySelector(".time").innerText = sec;
      sec--;
      if (sec === 0) {
        clearInterval(intervalId);
        alert("It's over now!");
      }
    }, 1000);
  }

  function getNumber() {
    const number = document.querySelector(".Input_Number").value;
    return number;
  }
  return app;
}
