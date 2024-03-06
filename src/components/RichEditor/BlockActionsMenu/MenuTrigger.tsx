import clsx from "clsx";
import { FC, MouseEvent } from "react";
import AddIcon from "./Icons/Add";

type MenuTriggerProps = {
  menuOpen: boolean;
  onMenuOpen: () => void;
  onMenuClose: () => void;
};

const MenuTrigger: FC<MenuTriggerProps> = ({
  menuOpen,
  onMenuClose,
  onMenuOpen,
}) => {
  const onMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    if (menuOpen) {
      onMenuClose();
    } else {
      onMenuOpen();
    }
  };

  return (
    <button
      onMouseDown={onMouseDown}
      className={clsx(
        "w-8 h-8 -mt-1.5 mr-2 bg-purple-200 text-black/50 fill-current block rounded-full transition-all",
        menuOpen ? "rotate-45" : "rotate-0"
      )}
    >
      <AddIcon />
    </button>
  );
};

export default MenuTrigger;
