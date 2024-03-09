import { FC, useEffect, useRef, useState } from "react";
import Button from "../../../../Button";
import Dialog, { DialogProps } from "../../../../Dialog";
import Input from "../../../../Input";
import classes from "./style.module.css";
import { Grid } from "@giphy/react-components";
import gifService from "../../../../../services/GifService";

interface InsertGifDialogProps {
  dialogProps: Omit<DialogProps, "children">;
  onSuccess: (src: string) => void;
}

const InsertGifDialog: FC<InsertGifDialogProps> = ({
  dialogProps,
  onSuccess,
}) => {
  const [value, setValue] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const fetchGifs = (offset: number) =>
    gifService.search(value || "random", { offset, limit: 10 });

  useEffect(() => {
    return () => {
      setValue("");
    };
  }, [dialogProps.isOpen]);

  return (
    <Dialog {...dialogProps} className={classes.insertGifDialog}>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={classes.searchInput}
        placeholder="Keyword"
      />
      <div className={classes.gridContainer} ref={containerRef}>
        <Grid
          width={containerRef.current?.getBoundingClientRect().width || 0}
          columns={5}
          gutter={6}
          fetchGifs={fetchGifs}
          key={value}
          onGifClick={(gif, e) => {
            e.preventDefault();
            onSuccess(gif.images.fixed_width.webp);
          }}
        />
      </div>
      <Button onClick={dialogProps?.onClose} className={classes.closeButton}>
        X
      </Button>
    </Dialog>
  );
};

export default InsertGifDialog;
