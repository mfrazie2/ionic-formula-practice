import { Heading } from "@chakra-ui/react";
import BodyText from "./body-text";
import IonCardLayout from "./ion-card-layout";
import { HYDROXIDE, SODIUM, CALCIUM, SULFATE, AMMONIUM, ALUMINUM } from "./ion-examples";


export default function PolyatomicIonExamples() {
  return (
    <>
      <Heading size='lg'>Polyatomic Ion Examples</Heading>
      <BodyText bodyText="Ionic compounds must be charge neutral, meaning the total number of positive charge equals the total number of negative charge. This does not require there be equal counts of each element type; only that the total cation charge equals the total anion charge." />
      <BodyText bodyText="The logic for monatomic ionic compounds can be applied for polyatomic ionic compounds. The primary difference is in how the formula is written when more than one polyatomic ion is needed to balance the charge. A polyatomic ion is a collection of atoms that have a net negative or positive charge. These ions are not divisible when creating compounds, meaning they are treated as a unit." />

      <Heading size='md'>Sodium hydroxide</Heading>
      <BodyText bodyText="Sodium hydroxide is made from the sodium cation and hydroxide anion. Each ion has a charge magnitude of 1, where the sodium cation has a positive 1 charge (missing one electron) and the hydroxide anion has a negative 1 charge (has one extra electron)." />
      <IonCardLayout
        anion={HYDROXIDE}
        cation={SODIUM}
        templateRowCount={1}
      />
      <BodyText bodyText="When these ions come together, the +1 and -1 charges equal and result in a neutral charge (0). The formula for sodium chloride is <b>NaOH</b>." />

      <Heading size='md'>Calcium hydroxide</Heading>
      <BodyText bodyText="Calcium hydroxide is made from the calcium cation and hydroxide anion. The calcium cation has a positive 2 charge (missing two electrons) and the oxide anion still has a negative 1 charge." />
      <IonCardLayout
        anion={HYDROXIDE}
        cation={CALCIUM}
        templateRowCount={2}
      />
      <BodyText bodyText="When these ions come together, there is a surplus of positive charge. Adding another hydroxide ion results in a balance of positive and negative charge." />
      <IonCardLayout
        anion={HYDROXIDE}
        cation={CALCIUM}
        anionCount={2}
        templateRowCount={2}
      />
      <BodyText bodyText="The formula for calcium hydroxide is <b>Ca(OH)<sub>2</sub></b>." />
      <BodyText bodyText="Take special note here. There are parenthesis around the hydroxide ion in the formula with a subscript of 2. This denotes that there are <b>TWO hydroxide units</b> in the formula. The parenthesis are <b><em>REQUIRED</em></b> if more than one polyatomic is needed to balance the charges." />

      <BodyText bodyText="The parenthesis rule is followed for both cations and anions when using polyatomic ions. Let's look at a few more examples." />

      <Heading size='md'>Ammonium sulfate</Heading>
      <BodyText bodyText="Ammonium sulfate is formed from two polyatomic ions. The ammonium cation carries a positive 1 charge and the sulfate anion carries a negative 2 charge. With one of each ion, there is a surplus of negative. " />
      <IonCardLayout
        anion={SULFATE}
        cation={AMMONIUM}
        templateRowCount={2}
      />
      <BodyText bodyText="Another ammonium ion is needed to balance the charges and result in a neutral compound." />
      <IonCardLayout
        anion={SULFATE}
        cation={AMMONIUM}
        cationCount={2}
        templateRowCount={2}
      />
      <BodyText bodyText="The formula for ammonium sulfate is <b>(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub></b>." />

      <Heading size='md'>Aluminum sulfate</Heading>
      <BodyText bodyText="Aluminum sulfate is formed from the aluminum and sulfate ions. The aluminum cation carries a positive 3 charge and the sulfate anion carries a negative 2 charge. With one of each ion, there is a surplus of positive charge." />
      <IonCardLayout
        anion={SULFATE}
        cation={ALUMINUM}
        templateRowCount={3}
      />
      <BodyText bodyText="Another sulfate ion is needed to try to balance the charges, resulting in a surplus of negative charge." />
      <IonCardLayout
        anion={SULFATE}
        anionCount={2}
        cation={ALUMINUM}
        templateRowCount={4}
      />
      <BodyText bodyText="Adding another aluminum ion to try to balance the charges, resulting in a surplus of positive charge." />
      <IonCardLayout
        anion={SULFATE}
        anionCount={2}
        cation={ALUMINUM}
        cationCount={2}
        templateRowCount={6}
      />
      <BodyText bodyText="Adding a final sulfate ion results in a neutral compound." />
      <IonCardLayout
        anion={SULFATE}
        anionCount={3}
        cation={ALUMINUM}
        cationCount={2}
        templateRowCount={6}
      />
      <BodyText bodyText="The formula for aluminum sulfate is <b>Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub></b>." />

      <Heading size='md'>Peroxide anion</Heading>
      <BodyText bodyText="Some potentially tricky compounds might involve the peroxide anion, O<sub>2</sub><sup>2-</sup>. Seeing 'O<sub>2</sub>' in a formula may make it seem like the cation has a 4+ charge paired with an oxide ion (O<sup>2-</sup>). In order to determine if the anion is oxide or peroxide, the charge of the cation needs to be determined first. See the Formula to Name tab for more tips." />
    </>
  )
}