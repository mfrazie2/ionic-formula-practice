"use client";
import { Heading } from "@chakra-ui/react";
import BodyText from "./body-text";
import IonCardLayout from "./ion-card-layout";
import { OXIDE, IRON_2, IRON_3 } from "./ion-examples";



export default function TransitionMetalIonExamples() {
  return (
    <>
      <Heading size='lg'>Transition Metal Ion Examples</Heading>
      <BodyText bodyText="Transition metals ions differ from other metal cations because they can have variable charges based on the number of electrons lost. When writing formula, the process of balancing positive and negative charge remains unchanged. The important step is correctly identifying the charge of the transition metal ion. " />
      <BodyText bodyText="Transition metal ion names always contain a Roman numeral in parenthesis after the element name. On the Ion List page, there are numerous examples such as Iron(II) and Iron(III). The element symbol is Fe. The charge is determined by the Roman numeral. Iron(II) has a formula of Fe<sup>2+</sup> and iron(III) has a formula of Fe<sup>3+</sup>. Let’s look at a couple of examples using the different iron cations with the same anion." />

      <Heading size='md'>Iron oxides</Heading>
      <BodyText bodyText="There are two forms of iron oxide: iron(II) oxide and iron(III) oxide." />
      <Heading size="sm">Iron(II) oxide</Heading>
      <IonCardLayout
        anion={OXIDE}
        cation={IRON_2}
        templateRowCount={2}
      />
      <BodyText bodyText="The formula for iron(II) oxide is FeO. The charge magnitudes for the two ions cancel out." />
      <Heading size="sm">Iron(III) oxide</Heading>
      <IonCardLayout
        anion={OXIDE}
        anionCount={3}
        cation={IRON_3}
        cationCount={2}
        templateRowCount={6}
      />
      <BodyText bodyText="The formula for iron(III) oxide is Fe<sub>2</sub>O<sub>3</sub>." />

      <Heading size='md'>Special note - Mercury</Heading>
      <BodyText bodyText="Mercury is a curious transition metal. There are two cations: mercury(I) and mercury(II). Based on the example of iron cations, it might be expected the formulas for mercury are Hg<sup>+</sup> and Hg<sup>2+</sup>, respectively. However, the formula for mercury(I) is Hg<sub>2</sub><sup>2+</sup>. This makes mercury(I) follow the rules of formula writing as a polyatomic ion. (Although, such compounds might only be theoretical.)" />
    </>
  )
}