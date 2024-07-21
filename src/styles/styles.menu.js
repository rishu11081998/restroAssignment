import styled from "styled-components";

export const MainContainer = styled.div`
  background: #f8f8f8;
  .menue-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 100%;
    z-index: 100;

    justify-content: center;
    h2 {
      color: #333333;
      text-align: left;
      font: normal normal bold 62px/52px "dinCondensed";
      letter-spacing: 0px;
      color: #333333;
      text-transform: uppercase;
      opacity: 1;
      margin: 0;
      margin-top: 35px;
    }
    .info {
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: auto;
      background: rgb(255, 218, 201) 0% 0% no-repeat padding-box;
      opacity: 1;

      p {
        margin: 0;
        margin-top: 5px;
        text-align: left;
        font: normal normal bold 18px/40px "dinCondensed";
        letter-spacing: 0.18px;
        color: #333333;
        cursor: pointer;
        opacity: 1;
      }
    }
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  height: 100vh; /* Adjust as per your layout */
  .column-container {
    border-right: 1px solid lightgray;
    flex: 1;
    background: #f8f8f8;

    display: flex;
  }
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: #f8f8f8;
  .main-title {
    text-align: left;
    font: normal normal bold 62px/52px "dinCondensed";
    letter-spacing: 0px;
    color: #333333;
    opacity: 1;
  }

  transform: translateY(${(props) => props.translateY}px);
  .menu-info {
    padding-left: 120px;
    margin-bottom: 52px;
    .menu-title {
      text-align: left;
      font-weight: 600;
      font-family: "dinCondensed";
      font-size: 16px;
      letter-spacing: 0.14px;
      color: #333333;
      opacity: 1;
      margin: 0;
    }
    .menu-description {
      text-align: left;
      font: normal normal normal 16px/20px "GillSans";
      font-family: "GillSans";
      letter-spacing: 0.15px;
      color: #767676;
      margin: 0;

      opacity: 1;
    }
    .price-div {
      width: 54px;
      height: 28px;
      border: 2px solid #ffdac9;
      opacity: 1;
      display: flex;
      align-items: center;
      font-family: "dinCondensed";
      font-size: 14px;
      justify-content: center;
      color: #333333;
      margin: 0;
      margin-top: 12px;

      cursor: pointer;
    }
  }
`;
