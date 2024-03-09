import { EditorProvider } from "@tiptap/react";
import InlineActionsMenu from "./Components/InlineActionsMenu";
import BlockActionsMenu from "./Components/BlockActionsMenu";
import classes from "./style.module.css";
import extensions from "./Extensions";
import { useEffect, useState } from "react";

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
      <InlineActionsMenu />
      <BlockActionsMenu />
    </EditorProvider>
  );
};

export default RichEditor;
