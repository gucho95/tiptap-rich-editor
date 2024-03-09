import { Dispatch, SetStateAction } from "react";
import ImageIcon from "./Icons/Image";
import YoutubeIcon from "./Icons/Youtube";

export const getBlockActions = ({
  onMenuClose,
  setImageDialogOpen,
  setYoutubeDialogOpen,
}: {
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
