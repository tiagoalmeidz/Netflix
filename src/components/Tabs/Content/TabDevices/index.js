import React from "react";
import ImgTV from "../../../../utils/images/tab-tv.png";
import ImgTablet from "../../../../utils/images/tab-tablet.png";
import ImgMacbook from "../../../../utils/images/tab-macbook.png";
import { Button } from "../../../Button";

import { Container } from "./styles";

function DevicesContent() {
  return (
    <Container>
      <div className="tab-content">
        <div className="tab-top-content">
          <span style={{ fontSize: "1.5rem" }}>
            Watch TV shows and movies anytime, anywhere - personalized for you.
          </span>
          <Button className="btn">try it now</Button>
        </div>

        <div className="tab-bottom-content">
          <div>
            <img src={ImgTV} alt="TV" className="imgTV" />
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs Playstation, Xbox, Chromecast, Apple TV, Blu-ray players
              and more.
            </p>
          </div>
          <div>
            <img src={ImgTablet} alt="Tablet" className="imgTablet" />
            <h3>Watch instantly or download for later</h3>
            <p>Avaiable on phone and tablet, wherever you go.</p>
          </div>
          <div>
            <img src={ImgMacbook} alt="Macbook" className="imgMacbook" />
            <h3>Use any computer</h3>
            <p>Watch right on Netflix.com.</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default DevicesContent;
