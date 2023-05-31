"use client";

import { Heading } from "@chakra-ui/layout";

interface Props {
  name: string;
}

export default function CompoundName({ name }: Props) {
  return (<Heading as='h2' size="lg" _firstLetter={{
    textTransform: 'capitalize'
  }}>{name}</Heading>)
}