"use client";

import { Box } from "@chakra-ui/react";

export default function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Box maxW={["100%", "1280px"]} p={[2, 4, 6, 8]} mx="auto">
      {children}
    </Box >
  )
}