import { Text } from "@chakra-ui/react";

interface BodyTextProps {
  bodyText: string;
}

export default function BodyText({ bodyText }: BodyTextProps) {
  return (
    <Text marginY="4" dangerouslySetInnerHTML={{ __html: bodyText }} />
  )
}