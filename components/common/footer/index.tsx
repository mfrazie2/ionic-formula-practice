"use client"

import { Icon } from "@chakra-ui/icon";
import { useMediaQuery } from '@chakra-ui/react'
Image
import { Box, Flex, Text } from "@chakra-ui/layout";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaGithubSquare, FaLinkedin, FaHome } from 'react-icons/fa'

export default function Footer() {
    const [isMobile] = useMediaQuery('(max-width: 800px)', {
        ssr: true,
        fallback: false, // return false on the server, and re-evaluate on the client side
    });

    return (
        <Box w="100%" bg="slateGray">
            <Flex as="footer" direction={isMobile ? 'column' : 'row'} alignItems="center" justifyContent={isMobile ? "space-around" : "space-between"} maxW={["100%", "1280px"]} px={[2, 4, 6, 8]} h="80px" mx="auto">
                <Text color="spaceCadet">Coded from a couch (probably) | &copy; 2023</Text>
                <Flex direction="row" columnGap="20px">
                    <Link href="mailto:mikedoescoding@gmail.com" aria-label="Send an email to creator">
                        <Icon as={FaEnvelope} boxSize={5} color="spaceCadet" />
                    </Link>
                    <Link href="https://github.com/mfrazie2" target="__blank" aria-label="View creator's github account">
                        <Icon as={FaGithubSquare} boxSize={5} color="spaceCadet" />
                    </Link>
                    <Link href="https://linkedin.com/in/mikesfrazier" target="__blank" aria-label="View creator's linkedin account">
                        <Icon as={FaLinkedin} boxSize={5} color="spaceCadet" />
                    </Link>
                    <Link href="https://mikedoescoding.com/about" target="__blank" aria-label="View creator's about me page">
                        <Icon as={FaHome} boxSize={5} color="spaceCadet" />
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
}
