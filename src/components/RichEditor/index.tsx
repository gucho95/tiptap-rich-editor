import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import classes from "./style.module.css";
import InlineActionsMenu from "./InlineActionsMenu";
import BlockActionsMenu from "./BlockActionsMenu";
import Underline from "@tiptap/extension-underline";

const extensions = [StarterKit, Underline];

const content = `<p>Lorem Ipsum <u>is</u> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Lorem Ipsum <u>is</u> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`;

const RichEditor = () => {
  return (
    <EditorProvider
      editorProps={{ attributes: { class: classes.editor } }}
      extensions={extensions}
      content={content}
    >
      <InlineActionsMenu />
      <BlockActionsMenu />
    </EditorProvider>
  );
};

export default RichEditor;
