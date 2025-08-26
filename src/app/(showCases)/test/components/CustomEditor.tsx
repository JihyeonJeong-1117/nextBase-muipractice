'use client';
import React, { useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  ClassicEditor,
  Essentials,
  Paragraph,
  Bold,
  Italic,
  MediaEmbed,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  LinkImage,
  ImageInsert,
  ImageUpload,
  Base64UploadAdapter,
  Alignment,
  Bookmark,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
  BlockQuote,
  FindAndReplace,
  Font,
  Heading,
  Highlight,
  HorizontalLine,
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import { Button } from '@mui/material';

// https://github.com/ckeditor/ckeditor5-demos/blob/master/feature-rich/index.js

const CustomEditor = ({ onSubmit }: { onSubmit: any }) => {
  const editorRef = useRef<ClassicEditor | null>(null);
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        data={'<p>리뷰를 입력하세요.</p>'}
        config={{
          licenseKey: 'GPL',
          plugins: [
            Essentials,
            Alignment,
            BlockQuote,
            Bold,
            Bookmark,
            Highlight,
            Paragraph,
            Italic,
            MediaEmbed,
            Image,
            ImageToolbar,
            ImageCaption,
            ImageStyle,
            ImageResize,
            LinkImage,
            ImageInsert,
            ImageUpload,
            Base64UploadAdapter,
          ],
          toolbar: [
            'undo',
            'redo',
            'highlight',
            'BlockQuote',
            'Bookmark',
            '|',
            'bold',
            'italic',
            'alignment',
            '|',
            'MediaEmbed',
            'ImageInsert',
          ],
        }}
        onReady={(newEditor) => {
          editorRef.current = newEditor;
        }}
      />
      <Button
        onClick={() => {
          console.log('fiored', editorRef.current?.getData());
        }}
      >
        저장하기
      </Button>
    </>
  );
};

export default CustomEditor;
