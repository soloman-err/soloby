import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopTab = () => {
  return (
    <div className="text-center">
      <Tabs forceRenderTabPanel defaultIndex={1}>
        <TabList>
          <Tab>Muscle car</Tab>
          <Tab>Sports</Tab>
          <Tab>Truck</Tab>
          <Tab>Electric</Tab>
        </TabList>

        {/* Muscle car */}
        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>Ford Mustang</Tab>
              <Tab>Mercury Cougar</Tab>
              <Tab>Pontiac GTO</Tab>
            </TabList>
            <TabPanel>1</TabPanel>
            <TabPanel>2</TabPanel>
            <TabPanel>3</TabPanel>
          </Tabs>
        </TabPanel>

        {/* Sports car */}
        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>Supercars</Tab>
              <Tab>Hot Hatches</Tab>
              <Tab>Exotic</Tab>
            </TabList>
            <TabPanel>1</TabPanel>
            <TabPanel>2</TabPanel>
            <TabPanel>3</TabPanel>
          </Tabs>
        </TabPanel>

        {/* Trucks */}
        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>Off-Road Trucks</Tab>
              <Tab>SUV-Based Trucks</Tab>
              <Tab>Compact Trucks</Tab>
            </TabList>
            <TabPanel>1</TabPanel>
            <TabPanel>2</TabPanel>
            <TabPanel>3</TabPanel>
          </Tabs>
        </TabPanel>

        {/* Electric */}
        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>Tesla Model X</Tab>
              <Tab>Crossovers</Tab>
              <Tab>Microcars</Tab>
            </TabList>
            <TabPanel>1</TabPanel>
            <TabPanel>2</TabPanel>
            <TabPanel>3</TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopTab;
