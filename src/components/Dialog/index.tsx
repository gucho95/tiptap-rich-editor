import { Dialog as HeadlessDialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { FC, Fragment, ReactNode } from "react";
import Button from "../Button";
import classes from "./style.module.css";
import CloseIcon from "./CloseIcon";
import { ButtonSize, ButtonVariant } from "../Button/types";

export interface DialogProps {
  title?: ReactNode;
  onClose?: () => void;
  isOpen: boolean;
  children: ReactNode;
  className?: string;
}

const Dialog: FC<DialogProps> = ({
  isOpen,
  onClose,
  children,
  title,
  className,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <HeadlessDialog
        as="div"
        className="relative z-10"
        onClose={() => onClose?.()}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <HeadlessDialog.Panel
                className={clsx(
                  "w-full max-w-full transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all",
                  className
                )}
              >
                <div className={classes.dialogHeader}>
                  {title ? (
                    <HeadlessDialog.Title
                      as="h3"
                      className={classes.dialogTitle}
                    >
                      {title}
                    </HeadlessDialog.Title>
                  ) : null}

                  {onClose ? (
                    <Button
                      variant={ButtonVariant.CUSTOM}
                      size={ButtonSize.CUSTOM}
                      className={clsx(classes.closeButton, "group")}
                      onClick={onClose}
                    >
                      <CloseIcon className="group-hover:fill-white" />
                    </Button>
                  ) : null}
                </div>

                {children}
              </HeadlessDialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </HeadlessDialog>
    </Transition>
  );
};

export default Dialog;
