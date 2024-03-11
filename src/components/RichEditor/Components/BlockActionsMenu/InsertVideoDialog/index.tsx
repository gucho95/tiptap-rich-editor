import { FC, useState } from "react";
import Dialog, { DialogProps } from "../../../../Dialog";
import Input from "../../../../Input";
import Button from "../../../../Button";

interface InsertVideoDialogProps {
  dialogProps: Omit<DialogProps, "children">;
  onSuccess: (src: string) => void;
}

const InsertVideoDialog: FC<InsertVideoDialogProps> = ({
  dialogProps,
  onSuccess,
}) => {
  const [value, setValue] = useState(
    "https://file-examples.com/storage/fe0275ec7165ef4cb9b4af6/2017/04/file_example_MP4_1920_18MG.mp4"
  );

  const onSubmit = () => {
    onSuccess(value);
  };

  return (
    <Dialog {...dialogProps} className="max-w-lg">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="mb-2"
        placeholder="Video URL"
      />

      <div className="grid grid-cols-2 gap-2">
        <Button onClick={dialogProps?.onClose}>Cancel</Button>
        <Button onClick={onSubmit}>Submit</Button>
      </div>
    </Dialog>
  );
};

export default InsertVideoDialog;
