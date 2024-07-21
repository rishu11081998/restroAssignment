import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState(1);
  const sectionCount = 3;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActiveSection(index + 1);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <StyledSidebar>
        {[...Array(sectionCount)].map((_, index) => (
          <SidebarItem key={index} active={activeSection === index + 1}>
            {activeSection === index + 1 && <BarItem>0{index + 1}</BarItem>}
            <Bar active={activeSection === index + 1} />
          </SidebarItem>
        ))}
      </StyledSidebar>
      <RequestInfo>Request Info</RequestInfo>
    </>
  );
};

const StyledSidebar = styled.div`
  position: fixed;
  top: 50%;
  left: 30px;
  z-index: 100;
  transform: translateY(-50%);
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 40px;
  position: relative;
  text-align: left;
  font-weight: bold;
  font: "dinCondensed";
  color: #333333;
  opacity: 1;
`;

const BarItem = styled.span`
  margin-right: 10px;
  font-size: 18px;
`;

const Bar = styled.div`
  width: ${({ active }) => (active ? "100%" : "50%")};
  height: 1px;
  background-color: ${({ active }) => (active ? "black" : "black")};
  transition: width 0.3s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
`;


const RequestInfo = styled.div`
  position: fixed;
  top: 50%;
  right: -5px;
  transform: translateY(-50%) rotate(270deg);
  cursor: pointer;
  z-index: 100;
  text-align: left;
  font: normal normal bold 18px/52px "dinCondensed";
  letter-spacing: 0.18px;
  color: #333333;
  background: #ffffff no-repeat padding-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 13px;
`;

export default Sidebar;
