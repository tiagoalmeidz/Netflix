import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabDoor from "./Navigation/TabDoor/";
import TabDevices from "./Navigation/TabDevices";

import "../../css/TabsNav.css";
import TabPrices from "./Navigation/TabPrices";

export default function TabComponent() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>
            <TabDoor />
            <p style={{ marginTop: "0.49rem" }}>
              <strong>
                No commitments <br /> Cancel online at anytime
              </strong>
            </p>
          </Tab>
          <Tab>
            <TabDevices />
            <p style={{ marginTop: "-5.3125rem" }}>
              <strong>Watch anywhere</strong>
            </p>
          </Tab>
          <Tab>
            <TabPrices />
            <p style={{ marginTop: "-0rem" }}>
              <strong>Pick your price</strong>
            </p>
          </Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </>
  );
}
