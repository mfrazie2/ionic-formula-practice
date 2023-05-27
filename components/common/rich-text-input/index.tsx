"use client";

import { Box } from "@chakra-ui/layout";
import { useCallback, useState } from "react";
import ReactQuill from 'react-quill';
import "./rich-text-input.css";
import { Button } from "@chakra-ui/button";
import useRichTextOptions from "./use-rich-text-options";

type Props = {
  checkUserResponse: (x0: string) => boolean;
}

export default function RichTextInput({ checkUserResponse }: Props) {

  const { formats, modules } = useRichTextOptions();

  // Needs to be up at a higher level
  const [editorHtml, setEditorHtml] = useState<ReactQuill.Value>('');

  // Needs to be at a higher level
  const handleCheckResponse = useCallback(() => {
    console.log(checkUserResponse(editorHtml.toString()));
  }, [editorHtml]);

  return <Box className="richTextInput">
    <ReactQuill
      onChange={setEditorHtml}
      value={editorHtml}
      modules={modules}
      formats={formats}
      placeholder="Enter formula"
      bounds=".richTextInput"
      theme={undefined}
    />
    <Button onClick={handleCheckResponse}>Check answer</Button>
  </Box>
}