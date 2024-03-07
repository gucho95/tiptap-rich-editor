import { ReactNode, forwardRef } from "react";
import clsx from "clsx";

enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  LINK = "link",
  DANGER = "danger",
  CUSTOM = "custom",
}
enum ButtonSize {
  CUSTOM = "custom",
  SMALL = "small",
  MIDDLE = "middle",
  DEFAULT = "default",
}

const DEFAULT_CLASSES =
  "flex-shrink-0 active:opacity-75 rounded-sm text-sm transition-all";

const TYPE_CLASSES = {
  [ButtonType.PRIMARY]:
    "bg-purple-200 text-black hover:bg-purple-300 disabled:bg-purple-100",
  [ButtonType.SECONDARY]:
    "bg-white text-purple-200 border-1px border-purple-200 hover:bg-purple-200 hover:text-white  hover:border-0 disabled:bg-white disabled:border-grey-light disabled:text-grey-200",
  [ButtonType.LINK]:
    "bg-white text-blue-light hover:underline disabled:text-blue-dark disabled:no-underline",
  [ButtonType.DANGER]:
    "bg-danger text-white hover:bg-opacity-50 disabled:bg-grey-light",
  [ButtonType.CUSTOM]: "",
};

const SIZE_CLASSES = {
  [ButtonSize.SMALL]: "px-3 py-2",
  [ButtonSize.MIDDLE]: "px-4 py-3",
  [ButtonSize.DEFAULT]: "px-5 py-4",
  [ButtonSize.CUSTOM]: "",
};
type ButtonProps = {
  className?: string;
  type?: ButtonType;
  size?: ButtonSize;
  children: ReactNode;
  onClick?: () => void;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    type = ButtonType.PRIMARY,
    size = ButtonSize.DEFAULT,
    ...buttonProps
  } = props;
  const typeClasses = TYPE_CLASSES?.[type] || "";
  const sizeClasses = SIZE_CLASSES?.[size] || "";

  return (
    <button
      ref={ref}
      className={clsx(DEFAULT_CLASSES, typeClasses, sizeClasses, className)}
      {...buttonProps}
    />
  );
});

export default Button;
