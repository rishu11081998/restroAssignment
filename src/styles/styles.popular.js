import styled from "styled-components";

export const StyledPopularWrapper = styled.div`
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  .popular-header {
    padding-left: 100px;
    padding-right: 100px;
    margin-top: 90px;

    display: flex;
    justify-content: space-between;

    h3 {
      text-align: left;
      font: normal normal bold 62px/52px "dinCondensed";
      letter-spacing: 0px;
      color: #333333;
      margin: 0;
      opacity: 0.5;
      position: relative;
      display: inline-block;
      color: black;
    }
    h3::before {
      content: "";
      position: absolute;
      left: -16px;
      right: 0;
      top: 25%;
      height: 10px;
      width: 120%;
      background-color: #ffdac9;
      z-index: -1;
    }
    span {
      padding: 5px;

      transform: matrix(0, 1, -1, 0, 0, 0);
      background: #ffdac9 0% 0% no-repeat padding-box;
      opacity: 1;
      text-align: left;
      font: normal normal bold 18px/52px "dinCondensed";
      letter-spacing: 0.18px;
      color: #333333;
      cursor: pointer;
      opacity: 1;
    }
    .right {
      margin-top: 46px;
    }
  }

  .parent {
    position: relative;
    .ant-carousel {
      padding-left: 100px;
    }
    .slick-slider {
      .slick-track {
        display: flex;
        gap: 20px;
        padding-top: 50px;
        padding-bottom: 100px;
      }
      .user-info {
        text-align: end;
        text-align: right;
        font: normal normal bold 14px/42px "dinCondensed";
        letter-spacing: 0.14px;
        color: #333333;
        opacity: 1;
      }
      .card-container {
        background: #ffffff 0% 0% no-repeat padding-box;
        box-shadow: 0px 20px 30px #0000000a;
        opacity: 1;
        /* width: 370px; */
        height: auto;

        .img-container {
          position: relative;
          .main-img {
            width: 100%;
          }

          .chef-stamp {
            position: absolute;
            top: -52px;
            z-index: 20000;
            left: 60%;
          }
          .next-icon {
            width: 60px;
            cursor: pointer;
            position: absolute;
            bottom: 0;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 60px;
            background: #ffdac9 0% 0% no-repeat padding-box;

            opacity: 1;
            img {
              width: 45%;
            }
          }

          .serving-info {
            position: absolute;
            top: 0;
            width: auto;
            height: 110px;
            background: #3333 0% 0% no-repeat padding-box;
            display: flex;
            align-items: center;
            opacity: 1;
            backdrop-filter: blur(3px);
            -webkit-backdrop-filter: blur(3px);
            p {
              text-align: center;
              padding: 5px;
              width: 100%;
              font: normal normal bold 28px/35px "dinCondensed";
              letter-spacing: 0.5px;
              color: #ffffff;
              opacity: 1;
              text-transform: uppercase;
              span {
                text-align: center;
                font-family: "dinCondensed";
                font: normal normal bold 22px/25px "";
                letter-spacing: 0.44px;
                color: #ffffff;
                opacity: 1;
              }
            }
          }
        }

        .card-info {
          padding: 20px;
          text-align: left;

          .title {
            font: normal normal bold 14px/42px "dinCondensed";
            letter-spacing: 0.14px;
            color: #767676;
            opacity: 0.56;
            padding: 0;
            margin: 0;
          }
          .heading {
            font: normal normal bold 22px/25px "dinCondensed";
            letter-spacing: 0.44px;
            color: #333333;
            opacity: 1;
            padding: 0;
            margin: 0;
          }
          .desc {
            font: normal normal normal 15px/20px "GillSans";
            letter-spacing: 0.15px;
            font-family: "GillSans";
            color: #767676;
            opacity: 1;
            padding: 0;
          }
        }
      }
    }
    .button-container {
      text-align: end;
      padding: 0px 30px;
      display: flex;
      justify-content: flex-end;
      gap: 22px;
      align-items: center;
      margin-bottom: 100px;
      position: absolute;
      right: 140px;
      top: 85%;
    }
  }
`;
