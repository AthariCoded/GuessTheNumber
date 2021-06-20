import { PlayButtonStyled, ResultWrapper, Msg } from "../styles";

const PlayAgain = (props) => {
  const handlePlayAgain = () => {
    props.setPlay(true);
  };

  return props.win ? (
    <ResultWrapper>
      <Msg>Correct!</Msg>
      <PlayButtonStyled onClick={handlePlayAgain}>Play Again</PlayButtonStyled>
    </ResultWrapper>
  ) : (
    <ResultWrapper>
      <Msg>You Lost</Msg>
      <PlayButtonStyled onClick={handlePlayAgain}>Play Again</PlayButtonStyled>
    </ResultWrapper>
  );
};

export default PlayAgain;
