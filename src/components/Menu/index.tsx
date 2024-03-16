import MenuItem from "./MenuItem";
import classes from "./style.module.css";
import { FormattingMenuAction } from "../RichEditor/types";
import { FC } from "react";

type MenuProps = {
  actions: FormattingMenuAction[];
};

const Menu: FC<MenuProps> = ({ actions }) => {
  return (
    <div className={classes.menu}>
      {actions.map((action) => (
        <MenuItem key={action.name} {...action} />
      ))}
    </div>
  );
};

export default Menu;
