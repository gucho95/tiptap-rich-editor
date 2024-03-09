import { FC } from "react";
import { Images } from "../../../../../services/ImageService/types";
import classes from "./style.module.css";
import clsx from "clsx";

type GridGalleryProps = {
  images: Images;
  loading: boolean;
  onSelect: (value: string) => void;
};

const Skeleton = () => {
  return (
    <div className={clsx(classes.gridContainer, "animate-pulse")}>
      {Array.from({ length: 20 })
        .fill(0)
        .map((_i, index) => (
          <div key={index} className={classes.skeletonItem} />
        ))}
    </div>
  );
};

const GridGallery: FC<GridGalleryProps> = ({ images, onSelect, loading }) => {
  if (loading) {
    return <Skeleton />;
  }

  return (
    <div className={classes.gridContainer}>
      {images?.map((image) => (
        <img
          key={image.id}
          src={image.urls.thumb}
          className={classes.gridItem}
          onClick={() => onSelect(image.urls.regular)}
        />
      ))}
    </div>
  );
};

export default GridGallery;
