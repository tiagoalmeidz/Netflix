import React from "react";
import Img from "../../../../utils/images/tab-1-pic.png";
import { TabContentContainer } from "../styles";

function DevicesContent() {
  return (
    <TabContentContainer>
      <div className="container">
        <div className="tab-content">
          <span>
            If you decide Netflix isn't for you - no problem. No commitment.
            Cancel online anytime.
          </span>
          <br />
          <button>Try it now</button>
          <img src={Img} alt="Cancel" />
        </div>
      </div>
    </TabContentContainer>
  );
}

export default DevicesContent;
