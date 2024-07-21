import { StyledCollabWrapper } from "../../styles/styles.collab";
import { CollabForm } from "./components/CollabForm";

export const Collaborate = () => {
  return (
    <StyledCollabWrapper>
      <div className="left">
        <p className="p-title">COLLABORATE </p>
        <h3>WITH US</h3>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="para">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore
        </p>
      </div>
      <div className="right">
        <CollabForm />
      </div>
    </StyledCollabWrapper>
  );
};
