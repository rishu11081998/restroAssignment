import styled from "styled-components";

export const StyledCollabWrapper = styled.div`
  padding-left: 100px;
  padding-right: 80px;
  background: #ffdac9 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  gap: 120px;
  justify-content: space-between;
  .left,
  .right {
    width: 100%;
  }
  .p-title {
    text-align: left;
    font: normal normal bold 35px/52px "dinCondensed";
    letter-spacing: 0px;
    color: #333333;
    margin-top: 70px !important;
  }
  .left {
    p {
      text-align: left;
      font: normal normal bold 35px/52px "dinCondensed";
      letter-spacing: 0px;
      color: #333333;
      margin: 0;
    }
    h3 {
      text-align: left;
      font: normal normal bold 62px/52px "dinCondensed";
      letter-spacing: 0px;
      color: black;
      margin: 0;

      opacity: 0.5;
      position: relative;
      display: inline-block;
      color: black; /* Adjust the text color as needed */
    }
    h3::before {
      content: "";
      position: absolute;
      left: -16px;
      right: 0;
      top: 25%;
      height: 10px;
      width: 120%;
      background-color: white;
      z-index: -1;
    }
    .para {
      text-align: left;
      font: normal normal normal 15px/20px Gill Sans;
      letter-spacing: 0.15px;
      color: #767676;
      opacity: 1;
      margin-bottom: 20px;
    }
  }
  .right {
    position: relative;
    .form-container {
      margin-top: 100px;
    }
    .form-div {
      label {
        text-align: left;
        font: normal normal bold 14px/42px "dinCondensed";
        letter-spacing: 0.14px;
        color: #333333;
        white-space: nowrap;
        opacity: 1;
      }
      .ant-select-focused .ant-select-selector,
      .ant-select-selector:focus,
      .ant-select-selector:active,
      .ant-select-open .ant-select-selector {
        box-shadow: none !important;
      }
      .ant-select:hover .ant-select-selector {
        /* border-color: #a2a2a2 !important; */
        box-shadow: none !important;
      }
      .ant-select-selector {
        /* border-color: rgba(204, 204, 204, 0.5) !important; */
        border: none;
        box-shadow: none !important;
      }

      .ant-select-selector {
        border-bottom: 1px solid !important;
        border-radius: 0px !important;
        padding: 0;
        background: transparent;
        box-shadow: none;
      }
      .ant-input-outlined:focus-within {
        box-shadow: none;
      }
      display: flex;
      gap: 30px;
      justify-content: space-between;
      input {
        background: transparent;
      }
      .ant-select-selection-placeholder,
      input::placeholder {
        text-align: left;
        font: normal normal normal 15px/20px "GillSans";
        letter-spacing: 0.15px;
        color: #767676;
        opacity: 0.3;
      }

      .ant-input {
        border-radius: 0px;
        padding: 0;

        border: none;
        border-bottom: 1px solid black;
      }
      .ant-form-item {
        width: 100% !important;
      }
    }
    button {
      text-align: left;
      font: normal normal bold 18px/52px "dinCondensed";
      letter-spacing: 0.18px;
      color: #ffdac9;
      opacity: 1;
      background: #333333 0% 0% no-repeat padding-box;
      opacity: 1;
    }
    .ant-form-item-control-input-content {
      display: flex;
      justify-content: end;
    }
    .detailDot {
      position: absolute;
      top: 0;
      left: 25%;
    }
  }
`;
