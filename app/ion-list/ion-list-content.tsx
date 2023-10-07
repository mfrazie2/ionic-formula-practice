"use client";
import ContentWrapper from "@/components/common/content-wrapper";
import { Flex } from "@chakra-ui/react";
import IonColumn from "./ion-column";
import data from '../../data/ions.json'

const IonListContent = () => {
  return (
    <ContentWrapper>
      <Flex justifyContent="space-evenly">
        <IonColumn ionList={data.cations} title="Cation" />
        <IonColumn ionList={data.anions} title="Anion" />
      </Flex>
    </ContentWrapper>
  );
}

export default IonListContent;