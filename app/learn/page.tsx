"use client";

import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import MonatomicIonExamples from "./monatomic-ion-examples";
import PolyatomicIonExamples from "./polyatomic-ion-examples";
import TransitionMetalIonExamples from "./transition-metal-ion-examples";
import FormulaToNameExamples from "./formula-to-name";

export default function Learn() {
  return (
    <Box maxW="1280px" p="40px 80px" mx="auto">
      <Tabs>
        <TabList>
          <Tab>Monatomic Ions</Tab>
          <Tab>Polyatomic Ions</Tab>
          <Tab>Transition Metal Ions</Tab>
          <Tab>Formula to Name</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <MonatomicIonExamples />
          </TabPanel>
          <TabPanel>
            <PolyatomicIonExamples />
          </TabPanel>
          <TabPanel>
            <TransitionMetalIonExamples />
          </TabPanel>
          <TabPanel>
            <FormulaToNameExamples />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box >
  )
}