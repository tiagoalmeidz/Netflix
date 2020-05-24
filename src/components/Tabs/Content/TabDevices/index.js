import React from "react";
import Img from "../../../../utils/images/tab-1-pic.png";
import { TabContentContainer } from "../styles";
import { Button } from "../../../Button";

function DevicesContent() {
  return (
    <TabContentContainer>
      <div className="container">
        <div className="tab-content">
          <div>
            <span style={{ marginBottom: "2rem" }}>
              If you decide Netflix isn't for you - no problem. No commitment.
              Cancel online anytime.
            </span>
            <br />
            <Button style={{ marginTop: "2rem" }}>Try it now</Button>
          </div>
          <img src={Img} alt="Cancel" style={{ width: "45rem" }} />
        </div>
      </div>
    </TabContentContainer>
  );
}

export default DevicesContent;
