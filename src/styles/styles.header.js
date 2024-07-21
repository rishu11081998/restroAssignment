import styled from "styled-components";

export const StyledHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;

  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  .header-logo {
    font: normal normal bold 28px/23px "dinCondensed";
  }
  .right-items {
    margin-right: 35px;
  }
  ul {
    list-style-type: none;
    display: flex;
    gap: 45px;
    justify-content: center;
    align-items: center;
    li {
      cursor: pointer;
      text-align: right;
      font: normal normal bold 18px/52px "dinCondensed";
      text-transform: uppercase;
      letter-spacing: 0px;
      color: #333333;
      opacity: 1;
    }
  }
`;
