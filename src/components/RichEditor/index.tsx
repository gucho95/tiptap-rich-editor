import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import classes from "./style.module.css";
import InlineActionsMenu from "./InlineActionsMenu";
import BlockActionsMenu from "./BlockActionsMenu";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";

const PlaceholderExtension = Placeholder.configure({
  placeholder: "Type something...",
  emptyEditorClass: classes.placeholder,
  considerAnyAsEmpty: true,
  showOnlyWhenEditable: true,
});

const YoutubeExtension = Youtube.configure({
  disableKBcontrols: true,
  modestBranding: false,
  controls: false,
});

const extensions = [
  StarterKit,
  PlaceholderExtension,
  Underline,
  Image,
  YoutubeExtension,
];

const content = "";

const RichEditor = () => {
  return (
    <EditorProvider
      autofocus="start"
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
