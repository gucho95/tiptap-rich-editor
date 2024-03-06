import { Editor, FloatingMenu, useCurrentEditor } from "@tiptap/react";
import classes from "./style.module.css";
import { Fragment, useEffect, useMemo, useState } from "react";
import MenuTrigger from "./MenuTrigger";
import Menu from "../InlineActionsMenu/Menu";
import H3Icon from "./Icons/H3";
import H4Icon from "./Icons/H4";
import ImageIcon from "./Icons/Image";

const getBlockActions = (editor: Editor, onMenuClose: () => void) => [
  {
    name: "h3",
    title: "Format to H3",
    icon: <H3Icon />,
    onSelect: () => {
      editor.chain().focus().toggleHeading({ level: 3 }).run();
      onMenuClose();
    },
    selected: editor.isActive("h3"),
  },
  {
    name: "h4",
    title: "Format to H4",
    icon: <H4Icon />,
    onSelect: () => {
      editor.chain().focus().toggleHeading({ level: 4 }).run();
      onMenuClose();
    },
    selected: editor.isActive("h4"),
  },
  {
    name: "image",
    title: "Insert Image by URL",
    icon: <ImageIcon />,
    onSelect: () => {
      onMenuClose();
    },
    selected: editor.isActive("image"),
  },
];

const BlockActionsMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { editor } = useCurrentEditor();

  const onMenuOpen = () => {
    setMenuOpen(true);
  };
  const onMenuClose = () => {
    setMenuOpen(false);
  };

  const actions = useMemo(() => {
    console.log("calc");
    return editor ? getBlockActions(editor, onMenuClose) : [];
  }, [editor]);

  useEffect(() => {
    editor?.on("selectionUpdate", onMenuClose);
    return () => {
      editor?.off("selectionUpdate", onMenuClose);
    };
  }, [editor]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("caret-transparent");
    }

    return () => {
      if (menuOpen) {
        document.body.classList.remove("caret-transparent");
      }
    };
  }, [menuOpen]);

  return (
    <Fragment>
      <FloatingMenu
        tippyOptions={{ placement: "left-start" }}
        className={classes.inlineActionsMenu}
      >
        <MenuTrigger
          menuOpen={menuOpen}
          onMenuClose={onMenuClose}
          onMenuOpen={onMenuOpen}
        />
      </FloatingMenu>

      <FloatingMenu tippyOptions={{ placement: "right-start", sticky: true }}>
        <div className="-mt-1.5 -ml-3">
          {menuOpen && <Menu actions={actions} />}
        </div>
      </FloatingMenu>
    </Fragment>
  );
};

export default BlockActionsMenu;
