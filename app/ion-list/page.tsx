"use client";

import { Box, Heading } from '@chakra-ui/layout'
import data from '../../data/ions.json'

export default function IonList() {

    return (
        <>
            <Heading as="h1">Ion List</Heading>
            {data.cations.map(cation => (<Box color={'carmine'}><div dangerouslySetInnerHTML={{ __html: cation.formula }} /></Box>))}
            {data.anions.map(anion => (<div dangerouslySetInnerHTML={{ __html: anion.formula }} />))}
        </>
    )
}