import { EditorProvider } from "@tiptap/react";
import BlockActionsMenu from "./Components/BlockActionsMenu";
import FormattingMenu from "./Components/FormattingMenu";
import extensions from "./Extensions";
import classes from "./style.module.css";

const content = "";

const RichEditor = () => {
  return (
    <EditorProvider
      editorProps={{ attributes: { class: classes.editor } }}
      extensions={extensions}
      content={content}
    >
      <FormattingMenu />
      <BlockActionsMenu />
    </EditorProvider>
  );
};

export default RichEditor;
