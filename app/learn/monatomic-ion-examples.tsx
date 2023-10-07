"use client";
import { Heading } from "@chakra-ui/react";
import BodyText from "./body-text";
import IonCardLayout from "./ion-card-layout";
import { CHLORIDE, SODIUM, OXIDE, ALUMINUM } from "./ion-examples";


export default function MonatomicIonExamples() {
  return (
    <>
      <Heading size='lg'>Monatomic Ion Examples</Heading>
      <BodyText bodyText="Ionic compounds must be charge neutral, meaning the total number of positive charge equals the total number of negative charge. This does not require there be equal counts of each element type; only that the total cation charge equals the total anion charge." />
      <Heading size='md'>Sodium chloride</Heading>
      <BodyText bodyText="Sodium chloride is made from the sodium cation and chloride anion. Each ion has a charge magnitude of 1, where the sodium cation has a positive 1 charge (missing one electron) and the chloride anion has a negative 1 charge (has one extra electron)." />
      <IonCardLayout
        anion={CHLORIDE}
        cation={SODIUM}
        templateRowCount={1}
      />
      <BodyText bodyText="When these ions come together, the +1 and -1 charges equal and result in a neutral charge (0). The formula for sodium chloride is <b>NaCl</b>." />

      <Heading size='md'>Sodium oxide</Heading>
      <BodyText bodyText="Sodium oxide is made from the sodium cation and oxide anion. The sodium cation still has a positive 1 charge and the oxide anion has a negative 2 charge (has two extra electrons)." />
      <IonCardLayout
        anion={OXIDE}
        cation={SODIUM}
        templateRowCount={2}
      />
      <BodyText bodyText="When these ions come together, there is a surplus of negative charge. Adding another sodium ion results in a balance of positive and negative charge." />
      <IonCardLayout
        anion={OXIDE}
        cation={SODIUM}
        cationCount={2}
        templateRowCount={2}
      />
      <BodyText bodyText="The formula for sodium oxide is <b>Na<sub>2</sub>O</b>." />

      <Heading size='md'>Aluminum oxide</Heading>
      <BodyText bodyText="The same logic can be applied when the charges are not 1-to-1 or 2-to-1. Aluminum oxide is formed from the aluminum cation and oxide anion. The aluminum cation has a positive 3 charge (missing three electrons) and the oxide anion has a negative 2 charge (has two extra electrons)." />
      <IonCardLayout
        anion={OXIDE}
        cation={ALUMINUM}
        templateRowCount={3}
      />
      <BodyText bodyText="In order to have the charges balance, there needs to be an equal number of positive charge and negative charge. With one of each type of ion, there is currently a surplus of positive charge, so another oxide anion is added." />
      <IonCardLayout
        anion={OXIDE}
        anionCount={2}
        cation={ALUMINUM}
        templateRowCount={4}
      />
      <BodyText bodyText="Now there is a surplus of negative charge, so another aluminum cation is added." />
      <IonCardLayout
        anion={OXIDE}
        anionCount={2}
        cation={ALUMINUM}
        cationCount={2}
        templateRowCount={6}
      />
      <BodyText bodyText="Again, there is a surplus of positive charge, so another oxide anion is added." />
      <IonCardLayout
        anion={OXIDE}
        anionCount={3}
        cation={ALUMINUM}
        cationCount={2}
        templateRowCount={6}
      />
      <BodyText bodyText="Finally, the positive and negative charges are balanced: 6 positive charges and 6 negative charges. The formula for aluminum oxide is <b>Al<sub>2</sub>O<sub>3</sub></b>." />

      <Heading size='md'>Take note</Heading>
      <BodyText bodyText="As you may have noticed, there are 2 aluminum cations and 3 oxide anions. The count of each ion type is the charge magnitude of the opposite ion. In general, applying the charge magnitude as a subscript on the opposite ion will result in the correct formula." />
      <BodyText bodyText="Be on the look out for magnitudes that can be reduced, such as 4:2 to 2:1. It would be incorrect to write a formula as X<sub>4</sub>Y<sub>2</sub> because the ratio is not at its smallest possible value. The criss-cross and reduce method is also tricky for polyatomic ions. In order to avoid these stumbling points, the card method demonstrated above is a sure-fire way to get the correct formula every time." />
    </>
  )
}