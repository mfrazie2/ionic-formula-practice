"use client";
import { Box, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link'
import IonCardLayout from './learn/ion-card-layout';
import { CHLORIDE, SODIUM } from './learn/ion-examples';

export default function Home() {
  return (
    <Box as="main" maxW="1280px" p="40px 80px" mx="auto">
      <div>
        <Heading size='lg'>Welcome to Ionic Formula Practice</Heading>
        <Box marginY="4">
          <Text>This site is built to help you practice writing ionic formulas. On the <Link href='/practice'><Text as="span" textDecoration="underline">Practice</Text></Link> page, you will be able to work on writing formulas from compound names or writing ion formulas from an ion name. There are also controls to practice naming compounds from a compound.</Text>
        </Box>
        <Box marginY="4">
          <Text>If you are ever stuck while working on a problem, you can use a hint or see the full list of ions on the <Link href={"/ion-list"}><Text as="span" textDecoration="underline">Ion List</Text></Link> page.</Text>
        </Box>
        <Box marginY="4">
          <Text>On the <Link href='/learn'><Text as="span" textDecoration="underline">Learn</Text></Link> page, you can review a technique for determining how translate a compound name to formula by equalizing the charges. There are additional tips for some trickier ions to help you get unstuck.</Text>
          <IonCardLayout
            anion={CHLORIDE}
            cation={SODIUM}
            templateRowCount={1}
          />
        </Box>
        <Box marginY="4">
          <Text>Thank you for using this site to practice your ionic formulas. If you find any problems (spelling, formulas, etc.), please reach out to <Link href="mailto:me@mikedoescoding.com"><Text as="span" textDecoration="underline">me</Text></Link> so this can be a helpful resource.</Text>
        </Box>
      </div>
    </Box >
  )
}
