import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

function TextEditor({ value, onChange, editable = true }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value || '',
    editable,
    onUpdate: ({ editor }) => {
      onChange && onChange(editor.getHTML());
    },
  });


  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '');
    }
  }, [value, editor]);

  return (
       <div
      className="p-3 bg-white shadow-sm"
      style={{
        minHeight: '200px',
        border: '1px solid #dee2e6',
        borderRadius: '0.375rem',
      }}
    >
      <EditorContent editor={editor} className="w-100" />
    </div>
  );
}

export default TextEditor;
