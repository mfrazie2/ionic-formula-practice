"use client";

import { Flex } from '@chakra-ui/layout'
import data from '../../data/ions.json'
import IonColumn from './ion-column';
import ContentWrapper from '@/components/common/content-wrapper';

export default function IonList() {

    return (
        <ContentWrapper>
            <Flex justifyContent="space-evenly">
                <IonColumn ionList={data.cations} title="Cation" />
                <IonColumn ionList={data.anions} title="Anion" />
            </Flex>
        </ContentWrapper>
    )
}