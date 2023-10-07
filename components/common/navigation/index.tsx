"use client"

import { Box, Flex } from '@chakra-ui/layout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from "next/navigation";
import NavigationItem from './navigation-item';

export default function Navigation() {
    const pathName = usePathname();

    return (
        <Box w="100%" bg="spaceCadet">
            <Flex as="nav" dir='row' alignItems="center" justifyContent="space-between" maxW={["100%", "1280px"]} px={[2, 4, 6, 8]} h="120px" mx="auto">
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