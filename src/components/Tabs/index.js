import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabDoor from "./Navigation/TabDoor/";
import TabDevices from "./Navigation/TabDevices";

import "../../css/TabsNav.css";
import TabPrices from "./Navigation/TabPrices";
import DoorContent from "./Content/TabDoor";
import DevicesContent from "./Content/TabDevices";
import PricesContent from "./Content/TabPrices";

export default function TabComponent() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(tabIndex) => setTabIndex(tabIndex)}
      >
        <TabList>
          <Tab className={`${tabIndex === 0 ? "tab-selected active" : null}`}>
            <TabDoor />
            <p style={{ marginTop: "0.49rem" }}>
              <strong>
                No commitments <br /> Cancel online at anytime
              </strong>
            </p>
          </Tab>
          <Tab className={`${tabIndex === 1 ? "tab-selected active" : null}`}>
            <TabDevices />
            <p style={{ marginTop: "-5.3125rem" }}>
              <strong>Watch anywhere</strong>
            </p>
          </Tab>
          <Tab className={`${tabIndex === 2 ? "tab-selected active" : null}`}>
            <TabPrices />
            <p style={{ marginTop: "-0rem" }}>
              <strong>Pick your price</strong>
            </p>
          </Tab>
        </TabList>

        {/* Tab Content */}
        <TabPanel>
          <DoorContent />
        </TabPanel>
        <TabPanel>
          <DevicesContent />
        </TabPanel>
        <TabPanel>
          <PricesContent />
        </TabPanel>
      </Tabs>
    </>
  );
}
