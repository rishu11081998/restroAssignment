import styled from "styled-components";
import backgroundImage from "../assets/bg.png";

export const StyledLandingWrapper = styled.div`
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .para-tag {
    text-align: center;
    font: normal normal bold 115px/95px "dinCondensed";
    letter-spacing: 0px;
    color: #ffffff;
    span {
      text-align: center;
      font: normal normal bold 35px/52px "dinCondensed";
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 1;
    }
  }
  img {
    top: 10%;
    position: absolute;
    left: 19%;
  }
`;
