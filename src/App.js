import "./App.css";
import { Header } from "./components/header";
import Sidebar from "./components/sidebar";
import { Collaborate } from "./pages/Collaborate";
import { LandingPage } from "./pages/Landing";
import ParallaxComponent from "./pages/OurMenue";
import { PopularRecipies } from "./pages/PopularRecipies";
import { StyledGlobalSectionWrapper } from "./styles/styles.global";

function App() {
  return (
    <StyledGlobalSectionWrapper>
      <Header />
      <Sidebar />
      <section id="landing">
        <LandingPage />
      </section>
      <section id="parallax">
        <ParallaxComponent />
      </section>

      <section id="recipes">
        <PopularRecipies />
      </section>

      <section>
        <Collaborate />
      </section>
    </StyledGlobalSectionWrapper>
  );
}

export default App;
