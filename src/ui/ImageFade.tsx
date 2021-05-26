import { Image as ImageThemeUi, ImageProps } from "@theme-ui/components";
import { ImageType, Product } from "../../types/types";

type ImageFadeProps = {
  img: ImageType;
} & ImageProps;

export default function ImageFade(props: ImageFadeProps) {
  const img = props.img.responsiveImage;
  return (
    <ImageThemeUi
      width={"324px"}
      height={"324px"}
      srcSet={img.srcSet}
      sizes={img.sizes}
      sx={{
        aspectRatio: "1 / 1",
        width: "100%",
        backgroundSize: "cover",
        backgroundColor: `${img.bgColor}33`,
        boxShadow: "0 100px 80px rgba(0, 0, 0, 0.05)",
      }}
    />
  );
}
