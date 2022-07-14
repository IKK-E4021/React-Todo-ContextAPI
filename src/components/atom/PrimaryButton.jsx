import classes from "./PrimaryButton.module.scss";

export const PrimaryButton = (props) => {
  const { name, onClick } = props;
  return (
    <button className={classes.button} onClick={onClick}>
      {name}
    </button>
  );
};
