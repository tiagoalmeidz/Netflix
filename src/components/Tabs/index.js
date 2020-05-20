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
          </Tab>
          <Tab>
            <TabDevices />
          </Tab>
          <Tab>
            <TabPrices />
          </Tab>
        </TabList>
      </Tabs>
    </>
  );
}
