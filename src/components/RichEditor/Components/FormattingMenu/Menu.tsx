import MenuItem from "./MenuItem";
import classes from "./style.module.css";
import { FormattingMenuAction } from "../../types";
import { FC } from "react";

type MenuProps = {
  actions: FormattingMenuAction[];
};

const Menu: FC<MenuProps> = ({ actions }) => {
  return (
    <div className={classes.formattingMenu}>
      {actions.map((action) => (
        <MenuItem key={action.name} {...action} />
      ))}
    </div>
  );
};

export default Menu;
