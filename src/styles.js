import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
      background-image: radial-gradient(circle, #e2eafc, #ccdbfd, #004e98);
        color: ${(props) => props.theme.mainColor};
    }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.h2`
  text-align: center;
`;

export const GameImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const EndImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const ThemeButton = styled.button`
  border: none;
  color: white;
  padding: 2px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const ResultWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  padding: 5px;
  margin-up: 10px;
`;

export const Msg = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  margin-right: 15px;
  font-size: 40px;
`;

export const PlayButtonStyled = styled.button`
 display:inline-block;
 padding:0.5em 3em;
 border:0.16em solid #004e98;
 margin:0 0.3em 0.3em 0;
 box-sizing: border-box;
 text-decoration:none;
 text-transform:uppercase;
 font-family:'Roboto',sans-serif;
 font-weight:400;
 color:#004e98;
 text-align:center;
 transition: all 0.15s;
}
&:hover{
 color:#004e98;
 border-color:#DDDDDD;
}
&:active{
 color:#004e98;
 border-color:#BBBBBB;
}
@media all and (max-width:30em){
 a.button2{
  display:block;
  margin:0.4em auto;
 }

`;

export const StyledTable = styled.table`
  flex-wrap: nowrap;
  border: 2px solid black;
  table-layout: fixed;
  width: 600px;
  height: 70px;
  text-align: center;
`;
export const TR = styled.tr`
  table-layout: fixed;
  margin: 0;
  padding: 0;
  justify-content: flex-start;
`;
export const TH = styled.td`
  table-layout: fixed;
  margin: 0;
  padding: 0;
  justify-content: flex-start;
  font-size: 24px;
`;

export const StyledTableHint = styled.table`
  border: 1px solid black;
  table-layout: fixed;
  width: 150px;
  height: 40px;
  text-align: center;
`;
export const TRH = styled.tr`
  table-layout: fixed;
  font-size: 20px;
  margin: 0;
  padding: 0;
  justify-content: flex-start;
`;
export const THH = styled.td`
  font-size: 20px;
`;
