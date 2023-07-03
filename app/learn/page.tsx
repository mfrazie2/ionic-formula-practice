"use client";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import MonatomicIonExamples from "./monatomic-ion-examples";
import PolyatomicIonExamples from "./polyatomic-ion-examples";
import TransitionMetalIonExamples from "./transition-metal-ion-examples";
import FormulaToNameExamples from "./formula-to-name";
import ContentWrapper from "@/components/common/content-wrapper";

/**
 * Maybe use useMediaQuery to either show the TabList (large viewport) or Menu (smaller viewports)
 * Not sure how the menu would influence the displayed tab 
 * https://chakra-ui.com/docs/components/tabs#controlled-tabs
 */

export default function Learn() {
  return (
    <ContentWrapper>
      <Tabs isLazy>
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
    </ContentWrapper >
  )
}