import { Dispatch, SetStateAction } from "react";
import ImageIcon from "./Icons/Image";
import YoutubeIcon from "./Icons/Youtube";
import GifIcon from "./Icons/Gif";

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
    title: "Insert Image",
    icon: <ImageIcon />,
    onSelect: () => {
      onMenuClose();
      setImageDialogOpen(true);
    },
  },
  {
    name: "youtube embed",
    title: "Insert Youtube Video",
    icon: <YoutubeIcon />,
    onSelect: () => {
      onMenuClose();
      setYoutubeDialogOpen(true);
    },
  },
  {
    name: "gif",
    title: "Insert GIF",
    icon: <GifIcon />,
    onSelect: () => {
      onMenuClose();
    },
  },
];
