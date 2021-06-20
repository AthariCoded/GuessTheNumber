import "./App.css";
import { GlobalStyle, Title, Description, GameImage } from "./styles";
import { ThemeProvider } from "styled-components";
import React, { useState } from "react";
import GuessBox from "./components/GuessBox";
import PlayAgain from "./components/PlayAgain";
import gameImages from "./gameImages";

const theme = {
  mainColor: "#004e98",
  backgroundColor: "#e2eafc",
};

function App() {
  const [pic, setPic] = useState(gameImages[2].image);
  const [play, setPlay] = useState(true);
  const [win, setWin] = useState(false);

  const setView = () => {
    return play ? (
      <GuessBox setPlay={setPlay} setWin={setWin} />
    ) : (
      <PlayAgain setPlay={setPlay} win={win} setPic={setPic} />
    );
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Title> Can You Guess The Number? </Title>
        <Description> Guess a number between 0 and 100 </Description>

        <GameImage alt="game picture" src={pic} />
        {setView()}
      </ThemeProvider>
    </div>
  );
}

export default App;
