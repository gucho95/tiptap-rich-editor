import { FC, useEffect, useState } from "react";
import Button from "../../../../Button";
import Dialog, { DialogProps } from "../../../../Dialog";
import Input from "../../../../Input";
import useDebounce from "../../../../../hooks/useDebounce";
import GridGallery from "./GridGallery";
import imageService from "../../../../../services/ImageService";
import { Images } from "../../../../../services/ImageService/types";
import classes from "./style.module.css";

interface InsertImageDialogProps {
  dialogProps: Omit<DialogProps, "children">;
  onSuccess: (src: string) => void;
}

const InsertImageDialog: FC<InsertImageDialogProps> = ({
  dialogProps,
  onSuccess,
}) => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");
  const [images, setImages] = useState<Images>([]);
  const debouncedValue = useDebounce(value);

  // listen to keyword change with debounce and query
  useEffect(() => {
    if (!dialogProps.isOpen) {
      return;
    }

    const search = async () => {
      setLoading(true);
      const data = await imageService.search.getPhotos({
        query: debouncedValue || "random",
        perPage: 20,
      });

      setImages(data.response?.results);
      setLoading(false);
    };

    search();
  }, [debouncedValue, dialogProps.isOpen]);

  // reset state variables on unmount
  useEffect(() => {
    return () => {
      setImages([]);
      setValue("");
      setLoading(true);
    };
  }, [dialogProps.isOpen]);

  return (
    <Dialog {...dialogProps} className={classes.insertImageDialog}>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={classes.searchInput}
        placeholder="Keyword"
      />

      <GridGallery images={images} onSelect={onSuccess} loading={loading} />
      <Button onClick={dialogProps?.onClose} className={classes.closeButton}>
        X
      </Button>
    </Dialog>
  );
};

export default InsertImageDialog;
