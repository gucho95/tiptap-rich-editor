import clsx from "clsx";
import { Fragment, ReactNode, forwardRef } from "react";
import classes from "./style.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errror?: string;
  components?: {
    IconBefore?: ReactNode;
    IconAfter?: ReactNode;
  };
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, errror, components, ...inputProps }, ref) => {
    return (
      <Fragment>
        <div className="relative">
          {components?.IconBefore ? (
            <span
              className={clsx(classes.iconWrapper, classes.iconBeforeWrapper)}
            >
              {components.IconBefore}
            </span>
          ) : null}

          <input
            className={clsx(
              classes.input,
              className,
              components?.IconBefore ? "px-14" : "px-6"
            )}
            ref={ref}
            {...inputProps}
          />

          {components?.IconAfter ? (
            <span
              className={clsx(classes.iconWrapper, classes.iconAfterWrapper)}
            >
              {components.IconAfter}
            </span>
          ) : null}
        </div>
        {errror ? <span className={classes.inputError}>{errror}</span> : null}
      </Fragment>
    );
  }
);

export default Input;
