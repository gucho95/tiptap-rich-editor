import classes from "./style.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}></div>
      <nav className={classes.navigation} />
      <div className={classes.actions}>
        <button className={classes.actionButton} />
        <button className={classes.actionButton} />
      </div>
    </header>
  );
};

export default Header;
