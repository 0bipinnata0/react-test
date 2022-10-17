import { useState } from "react";
import Field from "../components/field";
import useToggle from "../hooks/useToggle";

const Form = () => {
  const [length, setLength] = useState(0);
  const [password, setPassword] = useState("");
  const [includeLetters, onChangeUseLetter] = useToggle(false);
  const [includeNumbers, onChangeUseNumber] = useToggle(false);
  const [includeSymbols, onChangeUseSymbol] = useToggle(false);

  const onChangeLength = (value: string) => {
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue)) {
      setLength(0);
    } else {
      setLength(parsedValue);
    }
  };

  const onButtonClick = () => {
    const numbers = "0123456789";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()";
    let validChars = "";
    if (includeNumbers) {
      validChars += numbers;
    }
    if (includeLetters) {
      validChars += letters;
    }
    if (includeSymbols) {
      validChars += symbols;
    }
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    setPassword(generatedPassword);
  };

  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="box column is-one-third">
          <h1 className="title has-text-centered">Password Generator</h1>

          <div className="field">
            <label>Enter Length</label>
            <input
              className="input"
              value={length}
              onChange={(evt) => onChangeLength(evt.target.value)}
            />
          </div>

          <Field checked={includeLetters} onChange={onChangeUseLetter}>
            Use Letters
          </Field>
          <Field checked={includeNumbers} onChange={onChangeUseNumber}>
            Use Numbers
          </Field>
          <Field checked={includeSymbols} onChange={onChangeUseSymbol}>
            Use Symbols
          </Field>

          <button
            className="button is-link is-fullwidth"
            disabled={
              !(length && (includeLetters || includeNumbers || includeSymbols))
            }
            onClick={onButtonClick}
          >
            Generate!
          </button>
          {password.length > 0 && (
            <div className="box">
              <label>Your Password</label>
              <input key={password} className="input" defaultValue={password} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
