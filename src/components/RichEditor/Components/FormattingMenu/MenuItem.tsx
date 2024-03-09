import { FC, Fragment, MouseEvent } from "react";
import classes from "./style.module.css";
import { FormattingMenuAction } from "../../types";
import clsx from "clsx";

interface MenuItemProps extends FormattingMenuAction {}

const VerticalBorder = () => {
  return <span className="border-[0.25px] border-black/10 rounded-full" />;
};

const MenuItem: FC<MenuItemProps> = ({
  icon,
  name,
  title,
  onSelect,
  selected,
  borderBefore,
  borderAfter,
}) => {
  const onMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    onSelect(name);
  };

  return (
    <Fragment>
      {borderBefore && <VerticalBorder />}

      <button
        className={clsx(classes.menuButton, {
          [classes.menuButtonSelected]: selected,
        })}
        onMouseDown={onMouseDown}
        title={title}
      >
        <span className={classes.menuButtonIcon}>{icon}</span>
      </button>
      {borderAfter && <VerticalBorder />}
    </Fragment>
  );
};

export default MenuItem;
