import { Box, Image as ImageThemeUi, ImageProps } from "@theme-ui/components";
import { ThemeUIStyleObject } from "@theme-ui/css";
import { useEffect, useState } from "react";
import { ImageType, Product } from "../../types/types";

type ImageFadeProps = {
  img: ImageType;
  sx?: ThemeUIStyleObject;
  width?: string;
  height?: string;
  sizes?: string;
};

const imgSrcsetLoaded = [];

export default function ImageFade(props: ImageFadeProps) {
  const img = props.img.responsiveImage;
  const isImgLoaded = imgSrcsetLoaded.includes(img.srcSet);

  const [show, setShow] = useState(Boolean(isImgLoaded));

  useEffect(() => {
    if (isImgLoaded) {
      return;
    }

    var imgLoaded = new Image();
    imgLoaded.srcset = img.srcSet;
    imgLoaded.onload = function () {
      setShow(true);
      setTimeout(() => {
        imgSrcsetLoaded.push(img.srcSet);
      }, 1000);
    };
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
        sizes={props.sizes || ""}
        srcSet={img.srcSet}
        sx={{
          aspectRatio: "1 / 1",
          width: "100%",
          backgroundSize: "cover",
          animation: isImgLoaded ? "" : show && "fadeIn 0.2s forwards",
          opacity: Number(isImgLoaded),
          ...props.sx,
        }}
      />
    </Box>
  );
}
