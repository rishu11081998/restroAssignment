import { Button, Carousel } from "antd/es";
import React, { useRef, useState } from "react";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import slider4 from "../../assets/slider4.png";
import slider5 from "../../assets/slider6.png";
import chefStamp from "../../assets/chef-stamp.png";
import slider6 from "../../assets/slider7.png";
import next from "../../assets/next.png";
import nextArrowActive from "../../assets/next.svg";
import nextArrowDisable from "../../assets/nextDisable.svg";
import prevArrowActive from "../../assets/backActive.svg";
import prevArrowDisable from "../../assets/back.svg";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlide, setTotalSlide] = useState(6);
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const carouselRef = useRef();

  const goToPrevious = () => {
    carouselRef.current.prev();
    setCurrentSlide(currentSlide - 1);
  };

  const goToNext = () => {
    carouselRef.current.next();
    setCurrentSlide(currentSlide + 1);
  };
  const handleBeforeChange = (from, to) => {
    // Disable next button on the last slide
    if (to === 6 - 1) {
      setCurrentSlide(to);
    } else {
      setCurrentSlide(to);
    }
  };
  return (
    <div className="parent">
      <Carousel
        getPopupContainer={(trigger) => trigger.parentElement}
        afterChange={(index) => setCurrentSlide(index)}
        slidesToShow={4}
        ref={carouselRef}
      >
        {/* Slider 1 */}

        <div>
          <div className="card-container">
            <div className="img-container">
              <img className="main-img" src={slider1} alt="" />
              <div className="serving-info">
                <p>
                  4 <br />
                  <span>Servings</span>
                </p>
              </div>
              <img className="chef-stamp" src={chefStamp} alt="" />
              <div onClick={goToNext} className="next-icon">
                <img src={next} alt="" />
              </div>
            </div>
            <div className="card-info">
              <p className="title">DIFFICULTY</p>
              <h3 className="heading">
                CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST
              </h3>
              <p className="desc">
                Make a speedy version of romesco sauce with its famous almond
                and red pepper flavours. Serve on sourdough and add broccoli for
                a colourful, veget…
              </p>
            </div>
          </div>
          <div className="user-info">USER FULL NAME</div>
        </div>

        {/* Slider 2 */}
        <div>
          <div
            style={{
              width: "240px",
              height: "auto",
            }}
            className="card-container"
          >
            <div className="img-container">
              <img className="main-img" src={slider2} alt="" />
              <div
                style={{
                  width: "72px",
                  height: "72px",
                }}
                className="serving-info"
              >
                <p
                  style={{
                    font: `normal normal bold 34px/24px "dinCondensed"`,
                  }}
                >
                  2 <br />
                  <span
                    style={{
                      font: ` normal normal bold 14px/2px "dinCondensed"`,
                    }}
                  >
                    Servings
                  </span>
                </p>
              </div>

              <div onClick={goToNext} className="next-icon">
                <img src={next} alt="" />
              </div>
            </div>
            <div style={{ position: "relative" }} className="card-info">
              <p className="title">DIFFICULTY</p>
              <h3 className="heading">
                PINEAPPLE FRUIT SALAD WITH FRESH CREAM
              </h3>
              <p className="desc">
                The pineapple juice is the star of the dressing and what gives
                it such a refreshing and sweet taste. Pineapple juice is kno
              </p>
            </div>
            <div
              style={{ position: "absolute", textAlign: "end", width: "240px" }}
              className="user-info"
            >
              USER FULL NAME
            </div>
          </div>
        </div>
        {/* Slider 3 */}

        <div>
          <div
            style={{
              width: "240px",
              height: "auto",
            }}
            className="card-container"
          >
            <div className="img-container">
              <img className="main-img" src={slider3} alt="" />
              <div
                style={{
                  width: "72px",
                  height: "72px",
                }}
                className="serving-info"
              >
                <p
                  style={{
                    font: `normal normal bold 34px/24px "dinCondensed"`,
                  }}
                >
                  2 <br />
                  <span
                    style={{
                      font: ` normal normal bold 14px/2px "dinCondensed"`,
                    }}
                  >
                    Servings
                  </span>
                </p>
              </div>

              <div onClick={goToNext} className="next-icon">
                <img src={next} alt="" />
              </div>
            </div>
            <div style={{ position: "relative" }} className="card-info">
              <p className="title">DIFFICULTY</p>
              <h3 className="heading">
                PINEAPPLE FRUIT SALAD WITH FRESH CREAM
              </h3>
              <p className="desc">
                The pineapple juice is the star of the dressing and what gives
                it such a refreshing and sweet taste. Pineapple juice is kno
              </p>
            </div>
            <div
              style={{ position: "absolute", textAlign: "end", width: "240px" }}
              className="user-info"
            >
              USER FULL NAME
            </div>
          </div>
        </div>
        {/* Slider 4 */}

        <div>
          <div
            style={{
              width: "240px",
              height: "auto",
            }}
            className="card-container"
          >
            <div className="img-container">
              <img className="main-img" src={slider4} alt="" />
              <div
                style={{
                  width: "72px",
                  height: "72px",
                }}
                className="serving-info"
              >
                <p
                  style={{
                    font: `normal normal bold 34px/24px "dinCondensed"`,
                  }}
                >
                  8 <br />
                  <span
                    style={{
                      font: ` normal normal bold 14px/2px "dinCondensed"`,
                    }}
                  >
                    Servings
                  </span>
                </p>
              </div>

              <div onClick={goToNext} className="next-icon">
                <img src={next} alt="" />
              </div>
            </div>
            <div style={{ position: "relative" }} className="card-info">
              <p className="title">DIFFICULTY</p>
              <h3 className="heading">FETA AND PEACH COUSCOUS</h3>
              <p className="desc">
                Grab just four ingredients to make this easy, light lunch and
                enjoy a taste of summer. The combination of peaches, feta...
              </p>
            </div>
            <div
              style={{ position: "absolute", textAlign: "end", width: "240px" }}
              className="user-info"
            >
              USER FULL NAME
            </div>
          </div>
        </div>
        {/* Slider 5 */}

        <div>
          <div
            style={{
              width: "240px",
              height: "auto",
            }}
            className="card-container"
          >
            <div className="img-container">
              <img className="main-img" src={slider5} alt="" />
              <div
                style={{
                  width: "72px",
                  height: "72px",
                }}
                className="serving-info"
              >
                <p
                  style={{
                    font: `normal normal bold 34px/24px "dinCondensed"`,
                  }}
                >
                  2 <br />
                  <span
                    style={{
                      font: ` normal normal bold 14px/2px "dinCondensed"`,
                    }}
                  >
                    Servings
                  </span>
                </p>
              </div>
            </div>
            <div style={{ position: "relative" }} className="card-info">
              <p className="title">DIFFICULTY</p>
              <h3 className="heading">
                PINEAPPLE FRUIT SALAD WITH FRESH CREAM
              </h3>
              <p className="desc">
                The pineapple juice is the star of the dressing and what gives
                it such a refreshing and sweet taste. Pineapple juice is kno
              </p>
            </div>
            <div
              style={{ position: "absolute", textAlign: "end", width: "240px" }}
              className="user-info"
            >
              USER FULL NAME
            </div>
          </div>
        </div>
        {/* Slider 6 */}

        <div>
          <div
            style={{
              width: "240px",
              height: "auto",
            }}
            className="card-container"
          >
            <div className="img-container">
              <img className="main-img" src={slider6} alt="" />
              <div
                style={{
                  width: "72px",
                  height: "72px",
                }}
                className="serving-info"
              >
                <p
                  style={{
                    font: `normal normal bold 34px/24px "dinCondensed"`,
                  }}
                >
                  2 <br />
                  <span
                    style={{
                      font: ` normal normal bold 14px/2px "dinCondensed"`,
                    }}
                  >
                    Servings
                  </span>
                </p>
              </div>

              <div onClick={goToNext} className="next-icon">
                <img src={next} alt="" />
              </div>
            </div>
            <div style={{ position: "relative" }} className="card-info">
              <p className="title">DIFFICULTY</p>
              <h3 className="heading">
                PINEAPPLE FRUIT SALAD WITH FRESH CREAM
              </h3>
              <p className="desc">
                The pineapple juice is the star of the dressing and what gives
                it such a refreshing and sweet taste. Pineapple juice is kno
              </p>
            </div>
            <div
              style={{ position: "absolute", textAlign: "end", width: "240px" }}
              className="user-info"
            >
              USER FULL NAME
            </div>
          </div>
        </div>
      </Carousel>
      <div className="button-container">
        <img
          onClick={currentSlide !== 0 ? goToPrevious : null}
          src={currentSlide === 0 ? prevArrowDisable : prevArrowActive}
          alt="Previous"
          style={{ cursor: currentSlide === 0 ? "not-allowed" : "pointer" }}
        />
        <img
          onClick={currentSlide !== 6 - 1 ? goToNext : null}
          src={currentSlide === 6 - 1 ? nextArrowDisable : nextArrowActive}
          alt="Next"
          style={{ cursor: currentSlide === 6 - 1 ? "not-allowed" : "pointer" }}
        />
      </div>
    </div>
  );
};
export default Slider;
