"use client";

import { Tab, TabList, TabPanel, TabPanels, Tabs, useMediaQuery } from "@chakra-ui/react";
import MonatomicIonExamples from "./monatomic-ion-examples";
import PolyatomicIonExamples from "./polyatomic-ion-examples";
import TransitionMetalIonExamples from "./transition-metal-ion-examples";
import FormulaToNameExamples from "./formula-to-name";
import ContentWrapper from "@/components/common/content-wrapper";

export default function Learn() {
  const [isMobile] = useMediaQuery('(max-width: 800px)', {
    ssr: false,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  return (
    <ContentWrapper>
      <Tabs isLazy isFitted size={isMobile ? "sm" : 'md'}>
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