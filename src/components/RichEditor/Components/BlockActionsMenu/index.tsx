import { Editor, FloatingMenu, useCurrentEditor } from "@tiptap/react";
import classes from "./style.module.css";
import {
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import MenuTrigger from "./MenuTrigger";
import Menu from "../InlineActionsMenu/Menu";
import H3Icon from "./Icons/H3";
import H4Icon from "./Icons/H4";
import ImageIcon from "./Icons/Image";
import YoutubeIcon from "./Icons/Youtube";
import InsertImageDialog from "./InsertImageDialog";
import InsertYoutubeEmbedDialog from "./InsertYoutubeEmbedDialog";

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
    selected: editor.isActive("youtube"),
  },
];

const BlockActionsMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const [youtubeDialogOpen, setYoutubeDialogOpen] = useState(false);

  const { editor } = useCurrentEditor();

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
    editor?.on("selectionUpdate", onMenuClose);
    return () => {
      editor?.off("selectionUpdate", onMenuClose);
    };
  }, [editor]);

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

      <FloatingMenu tippyOptions={{ placement: "right-start" }}>
        <div className="-mt-1.5 -ml-3 bg-white">
          {menuOpen && <Menu actions={actions} />}
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
    </Fragment>
  );
};

export default BlockActionsMenu;
