import { StyledHeaderSection } from "../../styles/styles.header";

export const Header = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <StyledHeaderSection>
      <div className="left-items">
        <ul>
          <li onClick={() => handleScroll("landing")} className="header-logo">
            Logo
          </li>
          <li>ABOUT</li>
          <li>COMMUNITY</li>
          <li>LOCATION</li>
          <li onClick={() => handleScroll("parallax")}>OUR MENU</li>
          <li onClick={() => handleScroll("recipes")}>RECIPES</li>
        </ul>
      </div>
      <div className="right-items">
        <ul>
          <li>CONTACT</li>
          <li>LOGIN</li>
        </ul>
      </div>
    </StyledHeaderSection>
  );
};
