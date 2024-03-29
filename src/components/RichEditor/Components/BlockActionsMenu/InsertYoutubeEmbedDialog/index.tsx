import { FC, useState } from "react";
import Button from "../../../../Button";
import Dialog, { DialogProps } from "../../../../Dialog";
import Input from "../../../../Input";
import { ButtonVariant } from "../../../../Button/types";

interface InsertYoutubeEmbedDialogProps {
  dialogProps: Omit<DialogProps, "children">;
  onSuccess: (src: string) => void;
}

const InsertYoutubeEmbedDialog: FC<InsertYoutubeEmbedDialogProps> = ({
  dialogProps,
  onSuccess,
}) => {
  const [value, setValue] = useState("https://youtu.be/u1TP7RosLww");

  return (
    <Dialog {...dialogProps} className="max-w-md">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="mb-2"
        placeholder="Video URL"
        tabIndex={1}
      />
      <div className="grid grid-cols-2 gap-2">
        <Button
          variant={ButtonVariant.SECONDARY}
          onClick={dialogProps?.onClose}
        >
          Cancel
        </Button>
        <Button onClick={() => onSuccess(value)}>Submit</Button>
      </div>
    </Dialog>
  );
};

export default InsertYoutubeEmbedDialog;
