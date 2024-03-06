import MenuItem from "./MenuItem";
import classes from "./style.module.css";
import { InlineAction } from "../types";
import { FC } from "react";

type MenuProps = {
  actions: InlineAction[];
};

const Menu: FC<MenuProps> = ({ actions }) => {
  return (
    <div className={classes.inlineMenu}>
      {actions.map((action) => (
        <MenuItem key={action.name} {...action} />
      ))}
    </div>
  );
};

export default Menu;
