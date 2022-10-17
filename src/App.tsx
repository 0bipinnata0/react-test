import { faker } from "@faker-js/faker";
import { useMemo, useState } from "react";
import "./App.css";
function App() {
  const randomText = useMemo(() => faker.lorem.sentence(), []);
  const [text, setText] = useState("");

  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="box column is-one-third">
          <h1 className="title has-text-centered">Typing Challenge</h1>
          <p className="has-text-centered">
            {randomText.split("").map((char, index) => {
              const enteredLetter = text[index];
              const randomLetter = randomText[index];
              let className = "pending";
              if (enteredLetter) {
                className =
                  randomLetter === enteredLetter ? "correct" : "incorrect";
              }
              return (
                <span key={index} className={className}>
                  {char}
                </span>
              );
            })}
          </p>
          <div className="field">
            <input
              className="input"
              value={text}
              onChange={(evt) => setText(evt.target.value)}
            />
          </div>
          {text === randomText && (
            <div className="box has-text-centered">
              <h1>success</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
