import React, { useState } from "react";
import {
  ResultWrapper,
  PlayButtonStyled,
  StyledTable,
  TR,
  TH,
  StyledTableHint,
  TRH,
  THH,
} from "../styles";

//let randomNumber = Math.round(Math.random() * 10);

const GuessBox = (props) => {
  const [value, setValue] = useState("");
  const [answers, setAnswers] = useState("");
  const [attemps, setAttemps] = useState(0);
  const [rounds, setRounds] = useState(1);
  const [msgRound, setMsgRound] = useState("Round: ");
  const [randomNumber, setRandom] = useState(Math.round(Math.random() * 10));
  const [hint, setHint] = useState("");

  const Hint = () => {
    return randomNumber % 2 === 0
      ? setHint("Even Number")
      : setHint("Odd Number");
  };

  const Clicked = () => {
    const userGuess = parseInt(value, setValue);

    setAnswers(<p>Pick a number</p>);

    if (rounds < 4) {
      if (attemps < 5) {
        if (userGuess === randomNumber) {
          setAnswers(<p>Correct!</p>);
          setAttemps(0);
          setRounds("");
          setMsgRound("");
          props.setPlay(false);
          props.setWin(true);
          setHint("");
        }
        if (userGuess > randomNumber) {
          setAnswers(<p>Too high, guess again</p>);
          setAttemps(attemps + 1);
        }
        if (userGuess < randomNumber) {
          setAnswers(<p>Too low, guess again</p>);
          setAttemps(attemps + 1);
        }
      } else {
        //attemps=5
        if (rounds < 3) {
          setAnswers(<p>Finished all attemps, next is </p>);
          setAttemps(0);
          setRounds(rounds + 1);
          setRandom(Math.round(Math.random() * 10));
          setHint("");
        } else {
          setAnswers("");
          setAttemps(0);
          setMsgRound("");
          setRounds("");
          setAnswers(<p>Game over... You finished all rounds.</p>);
          props.setWin(false);
          props.setPlay(false);
          setHint("");
        }
      } //attemps=5
    } //round < 4
  };

  return (
    <div>
      <ResultWrapper>
        <input
          value={value}
          type="number"
          onChange={(e) => setValue(e.target.value)}
        />

        <PlayButtonStyled type="submit" onClick={Clicked}>
          GUESS
        </PlayButtonStyled>
      </ResultWrapper>
      <ResultWrapper>
        <h3>You have 5 attemps and 3 rounds.</h3>
      </ResultWrapper>
      <ResultWrapper>
        <StyledTable>
          <TR>
            <TH>{answers}</TH>
            <TH>
              {msgRound}
              {rounds}
              <p>Attemp:{attemps}</p>
            </TH>
          </TR>
        </StyledTable>
      </ResultWrapper>

      <ResultWrapper>
        <PlayButtonStyled type="submit" onClick={Hint}>
          Hint
        </PlayButtonStyled>
        <StyledTableHint>
          <TRH>
            <THH>{hint}</THH>
          </TRH>
        </StyledTableHint>
      </ResultWrapper>
    </div>
  );
};

export default GuessBox;
