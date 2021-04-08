import { Box, Flex, Grid, Text } from "@theme-ui/components";
import Image from "next/image";
import Link from "next/link";

import { PADDING_CONTAINER, WIDTH_CONTAINER_PX } from "../theme/theme";

export default function Container(props) {
  return (
    <Flex sx={{ justifyContent: "center" }} mx={PADDING_CONTAINER}>
      <Grid
        {...props}
        sx={{
          maxWidth: WIDTH_CONTAINER_PX,
        }}
      >
        {props.children}
      </Grid>
    </Flex>
  );
}
