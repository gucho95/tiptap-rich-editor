import { FC, MouseEvent } from "react";
import classes from "./style.module.css";
import { InlineAction } from "../types";
import clsx from "clsx";

interface MenuItemProps extends InlineAction {}

const MenuItem: FC<MenuItemProps> = ({
  icon,
  name,
  title,
  onSelect,
  selected,
}) => {
  const onMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    onSelect(name);
  };

  return (
    <button
      className={clsx(classes.menuButton, {
        [classes.menuButtonSelected]: selected,
      })}
      onMouseDown={onMouseDown}
      title={title}
    >
      <span className={classes.menuButtonIcon}>{icon}</span>
    </button>
  );
};

export default MenuItem;
