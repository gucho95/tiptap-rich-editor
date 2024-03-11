import { FloatingMenu, useCurrentEditor } from "@tiptap/react";
import { useEffect, useMemo, useState } from "react";
import MenuTrigger from "./MenuTrigger";
import InsertImageDialog from "./InsertImageDialog";
import InsertYoutubeEmbedDialog from "./InsertYoutubeEmbedDialog";
import Menu from "../FormattingMenu/Menu";
import { getBlockActions } from "./Actions";
import classes from "./style.module.css";
import InsertGifDialog from "./InsertGifDialog";
import InsertVideoDialog from "./InsertVideoDialog";

const BlockActionsMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const [youtubeDialogOpen, setYoutubeDialogOpen] = useState(false);
  const [gifDialogOpen, setGifDialogOpen] = useState(false);
  const [videoDialogOpen, setVideoDialogOpen] = useState(false);

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
    return getBlockActions({
      onMenuClose,
      setImageDialogOpen,
      setYoutubeDialogOpen,
      setGifDialogOpen,
      setVideoDialogOpen,
    });
  }, []);

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
      <FloatingMenu tippyOptions={{ placement: "left-start" }}>
        <MenuTrigger
          menuOpen={menuOpen}
          onMenuClose={onMenuClose}
          onMenuOpen={onMenuOpen}
          isEditorFocused={isEditorFocused}
        />
      </FloatingMenu>

      <FloatingMenu
        tippyOptions={{ placement: "right-start" }}
        className={classes.menuWrapper}
      >
        {menuOpen && isEditorFocused && (
          <div className="p-2">
            <Menu actions={actions} />
          </div>
        )}
      </FloatingMenu>

      <InsertImageDialog
        dialogProps={{
          title: "Find image by keyword",
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

      <InsertGifDialog
        dialogProps={{
          title: "Insert GIF",
          isOpen: gifDialogOpen,
          onClose: () => setGifDialogOpen(false),
        }}
        onSuccess={(src: string) => {
          setGifDialogOpen(false);
          editor?.chain().focus().setImage({ src }).run();
        }}
      />
      <InsertVideoDialog
        dialogProps={{
          title: "Insert Video",
          isOpen: videoDialogOpen,
          onClose: () => setVideoDialogOpen(false),
        }}
        onSuccess={(src: string) => {
          setVideoDialogOpen(false);
          editor
            ?.chain()
            .focus()
            .insertContent(`<video src="${src}"></video>`)
            .run();
        }}
      />
    </div>
  );
};

export default BlockActionsMenu;
