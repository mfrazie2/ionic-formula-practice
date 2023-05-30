"use client";

import { Box } from "@chakra-ui/layout";
import { useCallback } from "react";
import ReactQuill from 'react-quill';
import "./rich-text-input.css";
import useRichTextOptions from "./use-rich-text-options";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { selectUserResponse } from "@/features/practice/selectors";
import { actions } from "@/features/practice/slice";

export default function RichTextInput() {
  const dispatch = useAppDispatch();
  const userResp = useAppSelector(selectUserResponse)

  const { formats, modules } = useRichTextOptions();

  const handleChange = useCallback((value: string) => {
    dispatch(actions.setUserResponse(value));
  }, []);

  return <Box className="richTextInput">
    <ReactQuill
      onChange={handleChange}
      value={userResp}
      modules={modules}
      formats={formats}
      placeholder="Enter formula"
      bounds=".richTextInput"
      theme={undefined}
    />
  </Box>
}