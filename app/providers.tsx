"use client"

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { Concert_One } from "next/font/google"
import { Asul } from "next/font/google"
import { theme } from './theme'

const concertOne = Concert_One({ subsets: ['latin'], weight: '400' })
const asul = Asul({ subsets: ['latin'], weight: '400' })

export default function Providers({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <style jsx global>
                {`
                :root {
                --font-concertOne: ${concertOne.style.fontFamily};
                --font-asul: ${asul.style.fontFamily};
                }
            `}
            </style>
            <CacheProvider>
                <ChakraProvider theme={theme}>
                    {children}
                </ChakraProvider>
            </CacheProvider>
        </>
    )
}