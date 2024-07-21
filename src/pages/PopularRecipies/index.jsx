import Slider from "../../components/caraousel";

import { StyledPopularWrapper } from "../../styles/styles.popular";

export const PopularRecipies = () => {
  return (
    <StyledPopularWrapper>
      <div className="popular-header">
        <div className="left">
          <p>POPULAR RECIPES</p>
          <h3>RECIPES</h3>
          <br />
          <span>SEE ALL</span>
        </div>
        <div className="right">
          <p>DO YOU WANT TO SHARE YOUR OWN RECIPE?</p>
          <span>SEND IT NOW</span>
        </div>
      </div>
      <Slider />
    </StyledPopularWrapper>
  );
};
