import { BubbleMenu, Editor, useCurrentEditor } from "@tiptap/react";
import { useEffect, useMemo } from "react";
import Menu from "./Menu";
import classes from "./style.module.css";
import BoldIcon from "./Icons/Bold";
import ItalicIcon from "./Icons/Italic";
import UnderlineIcon from "./Icons/Underline";
import { FormattingMenuAction } from "../../types";
import BulListIcon from "./Icons/BulList";
import NumListIcon from "./Icons/NumList";
import StrikeThroughIcon from "./Icons/StrikeThrought";
import H3Icon from "./Icons/H3";
import H4Icon from "./Icons/H4";
import H2Icon from "./Icons/H2";
import H1Icon from "./Icons/H1Icon";
import { EditorState } from "@tiptap/pm/state";
import { EditorView } from "@tiptap/pm/view";

const getMenuActions = (editor: Editor): FormattingMenuAction[] => [
  {
    name: "h1",
    title: "Format to H1",
    icon: <H1Icon />,
    onSelect: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    selected: editor.isActive("h1"),
  },
  {
    name: "h2",
    title: "Format to H2",
    icon: <H2Icon />,
    onSelect: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    selected: editor.isActive("h2"),
  },
  {
    name: "h3",
    title: "Format to H3",
    icon: <H3Icon />,
    onSelect: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    selected: editor.isActive("h3"),
  },
  {
    name: "h4",
    title: "Format to H4",
    icon: <H4Icon />,
    onSelect: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
    selected: editor.isActive("h4"),
    borderAfter: true,
  },
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
  {
    name: "strikethrough",
    title: "Format StrikeThrough",
    icon: <StrikeThroughIcon />,
    onSelect: () => editor.chain().focus().toggleMark("strike").run(),
    selected: editor.isActive("strike"),
    borderAfter: true,
  },
  {
    name: "bulleted-list",
    title: "Toggle Bullete List",
    icon: <BulListIcon />,
    onSelect: () => editor.chain().focus().toggleBulletList().run(),
    selected: editor.isActive("underline"),
  },
  {
    name: "ordered-list",
    title: "Toggle Ordered List",
    icon: <NumListIcon />,
    onSelect: () => editor.chain().focus().toggleOrderedList().run(),
    selected: editor.isActive("underline"),
  },
];

const FormattingMenu = () => {
  const { editor } = useCurrentEditor();

  const actions = useMemo(() => {
    console.log("calc");
    return editor ? getMenuActions(editor) : [];
  }, [editor]);

  useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unmount");
    };
  }, []);

  // show only when there is text selected
  const shoudShow = (state: EditorState, view: EditorView): boolean => {
    const { from, to } = view.state.selection;
    const text = state.doc.textBetween(from, to, "");
    return Boolean(text.trim().length);
  };

  return (
    <BubbleMenu
      className={classes.formattingMenuWrapper}
      tippyOptions={{ maxWidth: "100%" }}
      shouldShow={({ editor }) => shoudShow(editor.state, editor.view)}
      editor={editor || undefined}
    >
      <Menu actions={actions} />
    </BubbleMenu>
  );
};

export default FormattingMenu;
