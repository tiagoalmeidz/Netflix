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
            <p>
              <strong>No commitments Cancel online at anytime</strong>
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
            <p>
              <strong>Pick your price</strong>
            </p>
          </Tab>
        </TabList>
      </Tabs>
    </>
  );
}
