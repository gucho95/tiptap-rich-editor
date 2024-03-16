import { ReactNode, forwardRef } from "react";
import { ButtonSize, ButtonVariant } from "./types";
import clsx from "clsx";

const DEFAULT_CLASSES =
  "flex-shrink-0 active:opacity-75 active:scale-[0.95] hover:opacity-90 rounded-lg text-sm transition-all";

const VARIANT_CLASSES = {
  [ButtonVariant.PRIMARY]: "bg-black/70 text-white disabled:bg-purple-100",
  [ButtonVariant.SECONDARY]:
    "bg-white text-black/70 border-[1px] border-black/70 hover:bg-black/70 hover:text-white hover:border-black/70",
  [ButtonVariant.LINK]:
    "bg-white text-blue-light hover:underline disabled:text-blue-dark disabled:no-underline",
  [ButtonVariant.DANGER]:
    "bg-danger text-white hover:bg-opacity-50 disabled:bg-grey-light",
  [ButtonVariant.CUSTOM]: "",
};

const SIZE_CLASSES = {
  [ButtonSize.SMALL]: "px-3 py-2",
  [ButtonSize.MIDDLE]: "px-4 py-3",
  [ButtonSize.DEFAULT]: "px-5 py-4",
  [ButtonSize.CUSTOM]: "",
};

type ButtonProps = {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  onClick?: () => void;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    variant = ButtonVariant.PRIMARY,
    size = ButtonSize.DEFAULT,
    ...buttonProps
  } = props;
  const variantClasses = VARIANT_CLASSES[variant] || "";
  const sizeClasses = SIZE_CLASSES[size] || "";

  return (
    <button
      ref={ref}
      className={clsx(DEFAULT_CLASSES, variantClasses, sizeClasses, className)}
      {...buttonProps}
    />
  );
});

export default Button;
