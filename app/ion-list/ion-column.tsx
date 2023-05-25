import { Flex, Heading, Text } from "@chakra-ui/layout";

interface Props {
  ionList: Ion[];
  title: string;
}

export default function IonColumn({ ionList, title }: Props) {

  return (
    <Flex textAlign="center" flexDirection='column'>
      <Heading as="h2" textDecoration="underline" mb="24px">{title}</Heading>
      {ionList.map(ion => (
        <Flex gap="8px" justifyContent="center" mb="8px" key={ion.formula}>
          <Text textTransform="capitalize">{ion.name}</Text>-<Text dangerouslySetInnerHTML={{ __html: ion.formula }} />
        </Flex>
      )
      )}
    </Flex>
  )
}