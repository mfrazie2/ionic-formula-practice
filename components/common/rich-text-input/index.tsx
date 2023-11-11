"use client";

import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import Text from '@tiptap/extension-text';
import { useEditor, EditorContent } from '@tiptap/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import "./rich-text-editor.css";
import { Box, Button } from '@chakra-ui/react';
import { FaSubscript, FaSuperscript } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { selectUserResponse } from '@/features/practice/selectors';
import { actions } from '@/features/practice/slice';

const RichTextInput = () => {
  const dispatch = useAppDispatch();
  const userResp = useAppSelector(selectUserResponse)

  const enabledFormattingRef = useRef<'sub' | 'super' | null>(null);

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Placeholder.configure({
        placeholder: 'Write your answer here...'
      }),
      Subscript,
      Superscript,
      Text,
    ],
    onUpdate({ editor }) {
      dispatch(actions.setUserResponse(editor.getHTML()))
    }
  })

  const toggleSubscript = useCallback(() => {
    editor?.chain().focus().toggleSubscript().run()
  }, [editor])
  const toggleSuperscript = useCallback(() => {
    editor?.chain().focus().toggleSuperscript().run()
  }, [editor])

  const handleButtonClick = useCallback((type: 'sub' | 'super') => () => {
    if (type === 'sub') {
      toggleSubscript();
      if (enabledFormattingRef.current === 'sub') {
        enabledFormattingRef.current = null;
      } else {
        if (enabledFormattingRef.current === 'super') {
          toggleSuperscript();
        }
        enabledFormattingRef.current = 'sub';
      }
    } else {
      toggleSuperscript();
      if (enabledFormattingRef.current === 'super') {
        enabledFormattingRef.current = null;
      } else {
        if (enabledFormattingRef.current === 'sub') {
          toggleSubscript();
        }
        enabledFormattingRef.current = 'super';
      }
    }
  }, [toggleSubscript, toggleSuperscript]);


  // Handle when userResponse is reset in state
  useEffect(() => {
    if (userResp === '') {
      editor?.commands.clearContent();
    }
  }, [editor, userResp])

  if (!editor) {
    return null
  }

  return (
    <Box className='rich-text-editor'>
      <Box className='rich-text-menu' p={2}>
        <Button variant='outline' size='xs'
          rightIcon={<FaSuperscript />}
          onClick={handleButtonClick('super')}
          className={enabledFormattingRef.current === 'super' ? 'is-active' : ''}
        />
        <Button variant='outline' size='xs'
          rightIcon={<FaSubscript />}
          onClick={handleButtonClick('sub')}
          className={enabledFormattingRef.current === 'sub' ? 'is-active' : ''}
        />
      </Box>

      <EditorContent className='rich-text-input' editor={editor} content={userResp} />
    </Box>
  )
}

export default RichTextInput
