import { FC, useState } from "react";
import Button from "../../../../Button";
import Dialog, { DialogProps } from "../../../../Dialog";
import Input from "../../../../Input";

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
    <Dialog {...dialogProps}>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="mb-2"
        placeholder="Video URL"
      />
      <div className="grid grid-cols-2 gap-2">
        <Button onClick={dialogProps?.onClose}>Cancel</Button>
        <Button onClick={() => onSuccess(value)}>Submit</Button>
      </div>
    </Dialog>
  );
};

export default InsertYoutubeEmbedDialog;
