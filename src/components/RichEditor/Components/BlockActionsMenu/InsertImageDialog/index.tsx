import { FC, useState } from "react";
import Button from "../../../../Button";
import Dialog, { DialogProps } from "../../../../Dialog";
import Input from "../../../../Input";

interface InsertImageDialogProps {
  dialogProps: Omit<DialogProps, "children">;
  onSuccess: (src: string) => void;
}

const InsertImageDialog: FC<InsertImageDialogProps> = ({
  dialogProps,
  onSuccess,
}) => {
  const [value, setValue] = useState("https://picsum.photos/1200/300");

  return (
    <Dialog {...dialogProps}>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="mb-2"
        placeholder="Image URL"
      />
      <div className="grid grid-cols-2 gap-2">
        <Button onClick={dialogProps?.onClose}>Cancel</Button>
        <Button onClick={() => onSuccess(value)}>Submit</Button>
      </div>
    </Dialog>
  );
};

export default InsertImageDialog;
