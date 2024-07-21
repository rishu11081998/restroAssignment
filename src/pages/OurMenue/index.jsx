import React from "react";
import { Column, Container, MainContainer } from "../../styles/styles.menu";
import {
  dessertMenuItems,
  mainCourseMenuItems,
  sidesMenuItems,
  starterMenuItems,
} from "../../constants/menuConstants";

const ParallaxComponent = () => {
  const scrollY = React.useRef(0);
  const [translateY1, setTranslateY1] = React.useState(0);
  const [translateY2, setTranslateY2] = React.useState(0);
  const [translateY3, setTranslateY3] = React.useState(0);
  const [translateY4, setTranslateY4] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollSpeed = 0.1;

      scrollY.current = window.scrollY;

      setTranslateY1(-scrollY.current * scrollSpeed);
      setTranslateY2(scrollY.current * scrollSpeed);
      setTranslateY3(-scrollY.current * scrollSpeed);
      setTranslateY4(scrollY.current * scrollSpeed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <MainContainer>
        <div className="menue-header">
          <h2>Our Menu</h2>
          <div className="info">
            <p>KNOW MORE</p>
          </div>
        </div>
        <Container>
          <div style={{ zIndex: "10" }} className="column-container">
            <Column
              borderRight={true}
              bgColor="#f0f0f0"
              translateY={translateY1}
              style={{ zIndex: "10" }}
            >
              <h2 className="main-title">STARTERS</h2>
              {starterMenuItems.map((item, index) => (
                <div className="menu-info" key={index}>
                  <p className="menu-title">{item.title}</p>
                  <p className="menu-description">{item.description}</p>
                  <div className="price-div">{item.price}</div>
                </div>
              ))}
            </Column>
          </div>
          <div
            style={{ zIndex: "8", position: "relative" }}
            className="column-container"
          >
            <Column
              borderRight={true}
              bgColor="#e0e0e0"
              translateY={translateY2}
            >
              <div
                style={{ position: "absolute", left: "-10px" }}
                className="whole-header"
              >
                <h2 className="main-title">
                  MAIN <br /> COURSES
                </h2>
                {mainCourseMenuItems.map((item, index) => (
                  <div
                    style={{ paddingLeft: "10%" }}
                    className="menu-info"
                    key={index}
                  >
                    <p className="menu-title">{item.title}</p>
                    <p className="menu-description">{item.description}</p>
                    <div className="price-div">{item.price}</div>
                  </div>
                ))}
              </div>
            </Column>
          </div>
          <div
            style={{ zIndex: "7", position: "relative" }}
            className="column-container"
          >
            <Column
              borderRight={true}
              bgColor="#d0d0d0"
              translateY={translateY3}
            >
              <div
                style={{ position: "absolute", left: "-10px" }}
                className="whole-header"
              >
                <h2 className="main-title">SIDES</h2>
                {sidesMenuItems.map((item, index) => (
                  <div
                    style={{ paddingLeft: "10%" }}
                    className="menu-info"
                    key={index}
                  >
                    <p className="menu-title">{item.title}</p>
                    <p className="menu-description">{item.description}</p>
                    <div className="price-div">{item.price}</div>
                  </div>
                ))}
              </div>
            </Column>
          </div>

          <div
            style={{ zIndex: "6", position: "relative" }}
            className="column-container"
          >
            <Column bgColor="#c0c0c0" translateY={translateY4}>
              <div
                style={{ position: "absolute", left: "-1px" }}
                className="whole-header"
              >
                <h2 className="main-title">DESSERTS</h2>
                {dessertMenuItems.map((item, index) => (
                  <div
                    style={{ paddingLeft: "10%" }}
                    className="menu-info"
                    key={index}
                  >
                    <p className="menu-title">{item.title}</p>
                    <p className="menu-description">{item.description}</p>
                    <div className="price-div">{item.price}</div>
                  </div>
                ))}
              </div>
            </Column>
          </div>
        </Container>
      </MainContainer>
    </>
  );
};

export default ParallaxComponent;
