import { Ion } from "@/utils/buildFormula";
import { Grid, GridItem, Card, CardBody, Text } from "@chakra-ui/react";
import { memo, useMemo } from "react";

interface Props {
  anion: Ion;
  anionCount?: number;
  cation: Ion;
  cationCount?: number;
  templateRowCount: number;
}

function IonCardLayout({
  anion,
  anionCount = 1,
  cation,
  cationCount = 1,
  templateRowCount }: Props) {

  const cationsToRender = useMemo(() => {
    return Array.from({ length: cationCount }, (_v, i) => {
      return (i * cation.chargeMagnitude) + 1
    })
  }, [cation.chargeMagnitude, cationCount]);
  const anionsToRender = useMemo(() => {
    return Array.from({ length: anionCount }, (_v, i) => {
      return (i * anion.chargeMagnitude) + 1
    })
  }, [anion.chargeMagnitude, anionCount]);

  return (
    <Grid
      templateRows={`repeat(${templateRowCount}, 1fr)`}
      templateColumns='repeat(2, 1fr)'
      gap={4}
      maxWidth='lg'
      margin="auto"
      marginY={4}
    >
      <>{
        cationsToRender.map(val => (
          <GridItem
            key={`cation-card-${cation.name}-${anion.name}-${val}`}
            rowSpan={cation.chargeMagnitude}
            rowStart={val}
            colSpan={1}
            colStart={1}>
            <Card height="100%" backgroundColor="pigmentGreen60">
              <CardBody alignItems='center' justifyContent='center' display='flex'>
                <Text userSelect='none' fontSize="20px" dangerouslySetInnerHTML={{ __html: cation.formula }} />
              </CardBody>
            </Card>
          </GridItem>)
        )
      }</>
      <>{
        anionsToRender.map(val => (
          <GridItem
            key={`anion-card-${cation.name}-${anion.name}-${val}`}
            rowSpan={anion.chargeMagnitude}
            rowStart={val}
            colSpan={1}
            colStart={2}>
            <Card height="100%" backgroundColor="carmine40">
              <CardBody alignItems='center' justifyContent='center' display='flex'>
                <Text userSelect='none' fontSize="20px" dangerouslySetInnerHTML={{ __html: anion.formula }} />
              </CardBody>
            </Card>
          </GridItem>
        ))
      }</>
    </Grid>
  );
}

export default memo(IonCardLayout);