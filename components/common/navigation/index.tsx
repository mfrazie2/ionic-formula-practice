"use client"

import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from "next/navigation";
import NavigationItem from './navigation-item';

export default function Navigation() {
    const pathName = usePathname();

    return (
        <Box w="100%">
            <Flex as="nav" dir='row' alignItems="center" justifyContent="space-between" maxW="1280px" px="80px" h="120px" bg="spaceCadet">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="Ionic Formula Practice Logo"
                        width={152}
                        height={93}
                        priority
                    />
                </Link>
                <Flex dir="row">
                    <NavigationItem isActive={pathName === "/practice"} href='/practice' title='Practice' />
                    <NavigationItem isActive={pathName === "/learn"} href='/learn' title='Learn' />
                    <NavigationItem isActive={pathName === "/ion-list"} href='/ion-list' title='Ion List' />
                </Flex>
            </Flex>
        </Box>
    );
}