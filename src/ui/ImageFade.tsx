import { Box, Image as ImageThemeUi, ImageProps } from "@theme-ui/components";
import { ThemeUIStyleObject } from "@theme-ui/css";
import { useEffect, useState } from "react";
import { ImageType, Product } from "../../types/types";

type ImageFadeProps = {
  img: ImageType;
  sx?: ThemeUIStyleObject;
  width?: string;
  height?: string;
};

const arr = [];

export default function ImageFade(props: ImageFadeProps) {
  const img = props.img.responsiveImage;
  const isImgLoaded = arr.includes(img.srcSet);

  const [show, setShow] = useState(isImgLoaded);

  useEffect(() => {
    if (!isImgLoaded) {
      var imgLoaded = new Image();
      imgLoaded.srcset = img.srcSet;
      imgLoaded.onload = function () {
        setShow(true);
      };
    }
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: `${img.bgColor}33`,
        boxShadow: "0 100px 80px rgba(0, 0, 0, 0.05)",
        overflow: "hidden",
      }}
    >
      <ImageThemeUi
        width={props.width || ""}
        height={props.height || ""}
        srcSet={img.srcSet}
        sizes={img.sizes}
        sx={{
          aspectRatio: "1 / 1",
          width: "100%",
          backgroundSize: "cover",
          animation: show && "fadeIn 0.3s forwards",
          opacity: 0,
          ...props.sx,
        }}
      />
    </Box>
  );
}
