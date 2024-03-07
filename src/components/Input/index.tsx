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
            <span className="absolute left-0 top-0 h-full flex items-center px-6 text-black-dark/50 z-0">
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
            <span className="absolute right-0 top-0 h-full flex items-center px-6 text-black-dark/50 z-0">
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
