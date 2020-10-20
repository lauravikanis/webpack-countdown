import "./app.css";
import { createElement } from "./element";

export function App() {
  const app = createElement("div", {
    className: "app",
    children: [
      createElement("div", {
        className: "time",
        innerText: createCountdownTimer(),
      }),
      createElement("button", {
        classname: "startTimeButton",
        innerText: "Go!",
        onclick: () => {
          createCountdownTimer();
        },
      }),
      createElement("input", {
        className: "Input_Number",
      }),
    ],
  });
  function createCountdownTimer() {
    let sec = document.querySelector(".Input_Number");
    let intervalId = setInterval(function () {
      document.querySelector(".time").innerText = sec;
      sec--;
      if (sec === 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  return app;
}

//   app.className = "startButton";
//   app.innerHTML = "Start Countdown";

//   // onclick function to start the countdown
//   app.onclick = function startTimer() {
//     let seconds = document.querySelector(".timer").textContent;
//     let countdown = setInterval(function () {
//       seconds--;
//       document.querySelector(".timer").textContent = seconds;
//       if (seconds <= 0) clearInterval(countdown);
//     }, 1000);
//   };

//   return app;
// }

// export function Timer() {
//   const timer = document.createElement("span");
//   timer.className = "timer";
//   timer.innerText = "20";

//   return timer;
// }
