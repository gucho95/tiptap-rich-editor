import { Editor, FloatingMenu, useCurrentEditor } from "@tiptap/react";
import classes from "./style.module.css";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import MenuTrigger from "./MenuTrigger";
import ImageIcon from "./Icons/Image";
import YoutubeIcon from "./Icons/Youtube";
import InsertImageDialog from "./InsertImageDialog";
import InsertYoutubeEmbedDialog from "./InsertYoutubeEmbedDialog";
import Menu from "../FormattingMenu/Menu";

const getBlockActions = ({
  editor,
  onMenuClose,
  setImageDialogOpen,
  setYoutubeDialogOpen,
}: {
  editor: Editor;
  onMenuClose: () => void;
  setImageDialogOpen: Dispatch<SetStateAction<boolean>>;
  setYoutubeDialogOpen: Dispatch<SetStateAction<boolean>>;
}) => [
  {
    name: "image",
    title: "Insert Image by URL",
    icon: <ImageIcon />,
    onSelect: () => {
      onMenuClose();
      setImageDialogOpen(true);
    },
    selected: editor.isActive("image"),
  },
  {
    name: "youtube embed",
    title: "Insert Youtube Embed",
    icon: <YoutubeIcon />,
    onSelect: () => {
      onMenuClose();
      setYoutubeDialogOpen(true);
    },
  },
];

const BlockActionsMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const [youtubeDialogOpen, setYoutubeDialogOpen] = useState(false);

  const { editor } = useCurrentEditor();
  const isEditorFocused = editor?.isFocused;

  // TODO: move this logic to parent component
  useEffect(() => {
    editor?.chain().focus().run();
  }, [editor]);

  const onMenuOpen = () => {
    setMenuOpen(true);
  };

  const onMenuClose = () => {
    setMenuOpen(false);
  };

  const actions = useMemo(() => {
    return editor
      ? getBlockActions({
          editor,
          onMenuClose,
          setImageDialogOpen,
          setYoutubeDialogOpen,
        })
      : [];
  }, [editor]);

  // Close menu on selection update
  useEffect(() => {
    if (menuOpen) {
      editor?.on("selectionUpdate", onMenuClose);
      editor?.on("blur", onMenuClose);
    }

    return () => {
      if (menuOpen) {
        editor?.off("selectionUpdate", onMenuClose);
        editor?.off("blur", onMenuClose);
      }
    };
  }, [editor, menuOpen]);

  // Hide caret when menu is open
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
    <div>
      <FloatingMenu
        tippyOptions={{ placement: "left-start" }}
        className={classes.formattingMenu}
      >
        <MenuTrigger
          menuOpen={menuOpen}
          onMenuClose={onMenuClose}
          onMenuOpen={onMenuOpen}
          isEditorFocused={isEditorFocused}
        />
      </FloatingMenu>

      <FloatingMenu tippyOptions={{ placement: "right-start" }}>
        <div className="-mt-1.5 -ml-3 bg-white">
          {menuOpen && isEditorFocused && <Menu actions={actions} />}
        </div>
      </FloatingMenu>

      <InsertImageDialog
        dialogProps={{
          title: "Insert Image by URL",
          isOpen: imageDialogOpen,
          onClose: () => setImageDialogOpen(false),
        }}
        onSuccess={(src: string) => {
          setImageDialogOpen(false);
          editor?.chain().focus().setImage({ src }).run();
        }}
      />

      <InsertYoutubeEmbedDialog
        dialogProps={{
          title: "Insert Youtube Video",
          isOpen: youtubeDialogOpen,
          onClose: () => setYoutubeDialogOpen(false),
        }}
        onSuccess={(src: string) => {
          setYoutubeDialogOpen(false);
          editor?.chain().focus().setYoutubeVideo({ src }).run();
        }}
      />
    </div>
  );
};

export default BlockActionsMenu;
