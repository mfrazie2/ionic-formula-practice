"use client";

import ContentWrapper from "@/components/common/content-wrapper";
import { useMediaQuery, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import FormulaToNameExamples from "./formula-to-name";
import MonatomicIonExamples from "./monatomic-ion-examples";
import PolyatomicIonExamples from "./polyatomic-ion-examples";
import TransitionMetalIonExamples from "./transition-metal-ion-examples";

const LearnContent = () => {
  const [isMobile] = useMediaQuery('(max-width: 800px)', {
    ssr: true,
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

export default LearnContent;
