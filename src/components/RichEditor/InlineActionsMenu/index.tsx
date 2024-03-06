import { BubbleMenu, Editor, useCurrentEditor } from "@tiptap/react";
import { useEffect, useMemo } from "react";
import Menu from "./Menu";
import classes from "./style.module.css";
import BoldIcon from "./Icons/Bold";
import ItalicIcon from "./Icons/Italic";
import UnderlineIcon from "./Icons/Underline";
import { InlineAction } from "../types";

const getInlineActions = (editor: Editor): InlineAction[] => [
  {
    name: "bold",
    title: "Format Bold",
    icon: <BoldIcon />,
    onSelect: () => editor.chain().focus().toggleMark("bold").run(),
    selected: editor.isActive("bold"),
  },
  {
    name: "italic",
    title: "Format Italic",
    icon: <ItalicIcon />,
    onSelect: () => editor.chain().focus().toggleMark("italic").run(),
    selected: editor.isActive("italic"),
  },
  {
    name: "underline",
    title: "Format Underline",
    icon: <UnderlineIcon />,
    onSelect: () => editor.chain().focus().toggleMark("underline").run(),
    selected: editor.isActive("underline"),
  },
];

const InlineActionsMenu = () => {
  const { editor } = useCurrentEditor();

  const actions = useMemo(() => {
    console.log("calc");
    return editor ? getInlineActions(editor) : [];
  }, [editor]);

  useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unmount");
    };
  }, []);

  console.log("render");

  return (
    <BubbleMenu className={classes.inlineMenuWrapper}>
      <Menu actions={actions} />
    </BubbleMenu>
  );
};

export default InlineActionsMenu;
