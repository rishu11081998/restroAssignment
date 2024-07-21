import { StyledLandingWrapper } from "../../styles/styles.landing";
import stamp from "../../assets/stamp.png";
export const LandingPage = () => {
  return (
    <StyledLandingWrapper>
      <p className="para-tag">
        THE BEST FOODIE <br /> EXPERIENCE
        <br />
        <span>NOW IN LONDON</span>
      </p>
      <img src={stamp} alt="" />
    </StyledLandingWrapper>
  );
};
