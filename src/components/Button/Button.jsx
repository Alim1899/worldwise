import classes from "./Button.module.css";
export default function Button({ children, onClick, type }) {
  return (
    <div onClick={onClick} type={type} className={`${classes.btn} ${classes[type]}`}>
      {children}
    </div>
  );
}
