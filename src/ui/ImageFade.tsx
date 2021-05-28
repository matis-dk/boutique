import { Box, Image as ImageThemeUi } from "@theme-ui/components";
import { ThemeUIStyleObject } from "@theme-ui/css";
import { RefObject, useEffect, useState, MouseEvent } from "react";
import { ImageType } from "../../types/types";

type ImageFadeProps = {
  img: ImageType;
  sx?: ThemeUIStyleObject;
  width?: string;
  height?: string;
  sizes?: string;
  forwardRef?: RefObject<HTMLDivElement>;
  onClick?: (e: MouseEvent<HTMLImageElement>) => void;
};

const imgSrcsetLoaded = [];

function ImageFade(props: ImageFadeProps) {
  const img = props.img.responsiveImage;
  const imgUrl = img.webpSrcSet;
  const isImgLoaded = imgSrcsetLoaded.includes(imgUrl);

  const [show, setShow] = useState(Boolean(isImgLoaded));

  useEffect(() => {
    if (isImgLoaded) {
      return;
    }

    var imgLoaded = new Image();
    imgLoaded.srcset = imgUrl;
    imgLoaded.onload = function () {
      setShow(true);
      setTimeout(() => {
        imgSrcsetLoaded.push(imgUrl);
      }, 1000);
    };
  }, []);

  return (
    <Box
      ref={props.forwardRef}
      sx={{
        backgroundColor: `${img.bgColor}33`,
        boxShadow: "0 100px 80px rgba(0, 0, 0, 0.05)",
      }}
    >
      <ImageThemeUi
        width={props.width || ""}
        height={props.height || ""}
        sizes={props.sizes || ""}
        srcSet={imgUrl}
        onClick={props?.onClick}
        sx={{
          display: "block",
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

type ImageWithBgProps = {
  img: ImageType;
  sx?: ThemeUIStyleObject;
  width?: string;
  height?: string;
  sizes?: string;
  forwardRef?: RefObject<HTMLDivElement>;
  onClick?: (e: MouseEvent<HTMLImageElement>) => void;
};

export function ImageWithBg(props: ImageWithBgProps) {
  const img = props.img.responsiveImage;
  const imgUrl = img.webpSrcSet;
  return (
    <Box
      ref={props.forwardRef}
      sx={{
        backgroundColor: `${img.bgColor}33`,
        boxShadow: "0 100px 80px rgba(0, 0, 0, 0.05)",
      }}
    >
      <ImageThemeUi
        width={props.width || ""}
        height={props.height || ""}
        sizes={props.sizes || ""}
        srcSet={imgUrl}
        onClick={props?.onClick}
        sx={{
          display: "block",
          aspectRatio: "1 / 1",
          width: "100%",
          backgroundSize: "cover",
          ...props.sx,
        }}
      />
    </Box>
  );
}

export default ImageFade;
