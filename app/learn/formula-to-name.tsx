"use client";
import { Heading } from "@chakra-ui/react";
import BodyText from "./body-text";

export default function FormulaToNameExamples() {
  return (
    <>
      <Heading size='lg'>Formula to Name Examples</Heading>
      <BodyText bodyText="Translating an ionic formula to the compound name does not have any quick tricks or shortcuts. You will need to work on recognizing the distinct cation and anion. Try reviewing the Ion List or setting the controls in Practice mode to name the individual ions. With enough time and repetition, it will become easier." />

      <Heading size='md'>Tips</Heading>
      <ul>
        <li>
          <BodyText bodyText="Monatomic ionic compounds are typically easier to name. The single element symbols do not require much modification to the names. Cations are always referred to by the element name and monatomic anions have the element name as the base and an '-ide' ending. As an example, chlorine is named as chloride in a compound." />
        </li>
        <li>
          <BodyText bodyText="Any ionic compound with a transition metal will always require the Roman numeral notation (with a few exceptions). Silver and zinc are the only two transition metals that do not require the Roman numeral notation in the list here. There are some non-transition metals, such as lead and tin, that do require the notation. When in doubt, check the Ion List." />
        </li>
        <li>
          <BodyText bodyText="Determining the charge of the transition metal usually requires determining the charge of the anion first. The variable charge of the transition metal ion means there is one extra step in confirming its charge." />
        </li>
        <li>
          <BodyText bodyText="For some polyatomic ions, you will need to pay special attention to the number of oxygen atoms in the formula. For example, there are multiple chlorine and oxygen anions (chlorate, perchlorate, chlorite and hypochlorite). These all contain one chlorine and a variable number of oxygen atoms; the compounds will have different properties. It is important to match the polyatomic formula to the correct name." />
        </li>
      </ul>


    </>
  )
}