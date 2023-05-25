"use client";

import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import data from '../../data/ions.json'
import IonColumn from './ion-column';

export default function IonList() {

    return (
        <Box maxW="1280px" p="40px 80px" mx="auto">
            <Flex justifyContent="space-evenly">
                <IonColumn ionList={data.cations} title="Cation" />
                <IonColumn ionList={data.anions} title="Anion" />
            </Flex>
        </Box>
    )
}