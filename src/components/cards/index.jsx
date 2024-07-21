import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.isVisible ? "translateY(-20px)" : "translateY(0)"};
`;

const Card = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Adjust the threshold as needed
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <CardContainer ref={cardRef} isVisible={isVisible}>
      {children}
    </CardContainer>
  );
};

export default Card;
