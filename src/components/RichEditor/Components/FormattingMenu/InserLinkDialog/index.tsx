import { FC, useMemo, useState } from "react";
import Button from "../../../../Button";
import Dialog, { DialogProps } from "../../../../Dialog";
import Input from "../../../../Input";
import { useCurrentEditor } from "@tiptap/react";

interface InsertLinkDialogProps {
  dialogProps: Omit<DialogProps, "children">;
  onSuccess: (src: string) => void;
}

const InsertLinkDialog: FC<InsertLinkDialogProps> = ({
  dialogProps,
  onSuccess,
}) => {
  const { editor } = useCurrentEditor();

  const selectedText = useMemo(() => {
    if (!editor || !dialogProps.isOpen) {
      return;
    }

    const { from, to } = editor.view.state.selection;
    const text = editor.state.doc.textBetween(from, to, "");
    return text;
  }, [editor, dialogProps.isOpen]);

  const [value, setValue] = useState("https://example.com");

  return (
    <Dialog {...dialogProps}>
      <Input value={selectedText} disabled={true} className="mb-2" />
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="mb-2"
        placeholder="URL to navigate"
      />
      <div className="grid grid-cols-2 gap-2">
        <Button onClick={dialogProps?.onClose}>Cancel</Button>
        <Button onClick={() => onSuccess(value)}>Submit</Button>
      </div>
    </Dialog>
  );
};

export default InsertLinkDialog;
