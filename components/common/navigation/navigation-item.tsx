"use client"

import { Heading } from "@chakra-ui/layout"
import Link from "next/link"

interface Props {
    isActive: boolean;
    href: string;
    title: string;
}

export default function NavigationItem({ isActive, href, title }: Props) {
    return (
        <Link href={href}>
            <Heading size="24px" fontWeight="normal" color="whiteSmoke" ml="20px" textDecor={isActive ? "underline" : undefined} _hover={{
                fontWeight: 'semibold'
            }}>
                {title}
            </Heading>
        </Link>
    )
}