import { EditorProvider } from "@tiptap/react";
import BlockActionsMenu from "./Components/BlockActionsMenu";
import FormattingMenu from "./Components/FormattingMenu";
import extensions from "./Extensions";
import classes from "./style.module.css";
import { useState } from "react";
import Button from "../Button";
import { ButtonVariant } from "../Button/types";

const RichEditor = () => {
  const [content, setContent] = useState({});

  const onConsole = () => {
    console.log("content", content);
  };

  return (
    <EditorProvider
      editorProps={{ attributes: { class: classes.editor } }}
      extensions={extensions}
      content={""}
      onUpdate={({ editor }) => setContent(editor.getJSON())}
    >
      <FormattingMenu />
      <BlockActionsMenu />

      <div className="flex justify-end mt-2 space-x-2">
        <Button variant={ButtonVariant.SECONDARY} onClick={onConsole}>
          Console JSON
        </Button>
      </div>
    </EditorProvider>
  );
};

export default RichEditor;
