import { EditorProvider } from "@tiptap/react";
import BlockActionsMenu from "./Components/BlockActionsMenu";
import FormattingMenu from "./Components/FormattingMenu";
import extensions from "./Extensions";
import classes from "./style.module.css";
import { useState } from "react";

const RichEditor = () => {
  const [content, setContent] = useState({});
  console.log("content", content);

  return (
    <EditorProvider
      editorProps={{ attributes: { class: classes.editor } }}
      extensions={extensions}
      content={""}
      onUpdate={({ editor }) => setContent(editor.getJSON())}
    >
      <FormattingMenu />
      <BlockActionsMenu />
    </EditorProvider>
  );
};

export default RichEditor;
