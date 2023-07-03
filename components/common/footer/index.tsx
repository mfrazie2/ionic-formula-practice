"use client"

import { Icon } from "@chakra-ui/icon";
Image
import { Box, Flex, Text } from "@chakra-ui/layout";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaGithubSquare, FaLinkedin, FaHome } from 'react-icons/fa'

export default function Footer() {
    return (
        <Box w="100%" bg="slateGray">
            <Flex as="footer" dir='row' alignItems="center" justifyContent="space-between" maxW={["100%", "1280px"]} px={[2, 4, 6, 8]} h="80px" mx="auto">
                <Text color="spaceCadet">Coded from a couch (probably) | &copy; 2023</Text>
                <Flex dir="row" columnGap="20px">
                    <Link href="mailto:me@mikedoescoding.com" aria-label="Send an email to creator">
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
