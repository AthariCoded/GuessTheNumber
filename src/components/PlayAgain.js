import { PlayButtonStyled, ResultWrapper, Msg, EndImage } from "../styles";
import gameImages from "../gameImages";
const PlayAgain = (props) => {
  const handlePlayAgain = () => {
    props.setPlay(true);
  };

  return props.win ? (
    <ResultWrapper>
      <Msg>Correct!</Msg>
      <p>
        <EndImage alt="gameover picture" src={gameImages[1].image} />
      </p>
      <PlayButtonStyled onClick={handlePlayAgain}>Play Again</PlayButtonStyled>
    </ResultWrapper>
  ) : (
    <ResultWrapper>
      <Msg>You Lost</Msg>
      <p>
        <EndImage alt="gameover picture" src={gameImages[0].image} />
      </p>
      <PlayButtonStyled onClick={handlePlayAgain}>Play Again</PlayButtonStyled>
    </ResultWrapper>
  );
};

export default PlayAgain;
