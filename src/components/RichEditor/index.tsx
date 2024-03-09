import { useEffect, useState } from "react";
import { EditorProvider } from "@tiptap/react";
import BlockActionsMenu from "./Components/BlockActionsMenu";
import FormattingMenu from "./Components/FormattingMenu";
import extensions from "./Extensions";
import classes from "./style.module.css";

const content = "";

const RichEditor = () => {
  const [isReady, setIsReady] = useState(false);

  const onCreate = () => {
    setIsReady(true);
  };

  useEffect(() => {
    console.log("editor", isReady);
  }, [isReady]);

  return (
    <EditorProvider
      editorProps={{ attributes: { class: classes.editor } }}
      extensions={extensions}
      content={content}
      onBeforeCreate={() => {
        console.log("before create");
      }}
      onCreate={onCreate}
    >
      <FormattingMenu />
      <BlockActionsMenu />
    </EditorProvider>
  );
};

export default RichEditor;
