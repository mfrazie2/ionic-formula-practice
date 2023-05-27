"use client";

import { Box, Heading, Text } from "@chakra-ui/layout";
import data from '../../data/ions.json'
import { useCallback, useEffect, useState } from "react";
import { Button } from "@chakra-ui/button";

import { checkAnswer } from "@/utils/checkAnswer";
import { buildFormula, Ion } from "@/utils/buildFormula";
import RichTextInput from "@/components/common/rich-text-input";

function getRandomIndex(list: any[]) {
  var randomNum = Math.random();
  var randomIndex = Math.floor(randomNum * list.length);
  return randomIndex;
}

function getRandomIon(arr: Ion[]) {
  var indexValue = getRandomIndex(arr);
  return arr[indexValue];
}

export default function Practice() {
  const [cation, setCation] = useState<Ion>(null!)
  const [anion, setAnion] = useState<Ion>(null!)
  const [answer, setAnswer] = useState<string>(null!);

  const getPromptPair = useCallback(() => {
    const cation = getRandomIon(data.cations);
    const anion = getRandomIon(data.anions);

    setCation(cation);
    setAnion(anion);
    setAnswer(buildFormula(cation, anion));
  }, [])

  const checkUserResponse = useCallback((userResp: string) => {
    return checkAnswer(userResp, answer);
  }, [answer]);

  useEffect(() => {
    getPromptPair();
  }, []);

  return (
    <Box maxW="1280px" p="40px 80px" mx="auto">
      <Heading as="h1">Name to Formula</Heading>
      <Button onClick={getPromptPair}>New compound</Button>

      {cation && anion && <Text _firstLetter={{
        textTransform: 'capitalize'
      }}>{cation.name} {anion.name}</Text>}

      <RichTextInput checkUserResponse={checkUserResponse} />


    </Box>
  )
}