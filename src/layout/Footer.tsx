import { Box, Flex, Text } from "@theme-ui/components";
import Image from "next/image";
import Link from "next/link";

import { colors, PADDING_CONTAINER, WIDTH_CONTAINER_PX } from "../theme/theme";

export default function Header() {
  return (
    <Flex
      px={PADDING_CONTAINER}
      sx={{
        height: "400px",
        borderBottom: `1px solid ${colors.gray5}`,
        justifyContent: "center",
        flexDirection: "column",
        width: WIDTH_CONTAINER_PX,
      }}
    >
      <Text variant="headline2">kontakt@boutique.dk</Text>
      <Flex
        mt="5"
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Text as="h4" variant="headline4">
            Hvad er Boutique?
          </Text>
          <Text as="p" variant="body">
            Vi prøver ting af
          </Text>
        </Box>
        <Box>
          <Text as="h4" variant="headline4">
            Om os?
          </Text>
          <Text as="p" variant="body">
            Omkring forretningen
          </Text>
          <Text as="p" variant="body">
            Ejerne
          </Text>
        </Box>
        <Box>
          <Text as="h4" variant="headline4">
            Service
          </Text>
          <Text as="p" variant="body">
            Levering
          </Text>
          <Text as="p" variant="body">
            Kundeprodukter
          </Text>
        </Box>
        <Box>
          <Text as="h4" variant="headline4">
            Diverse
          </Text>
          <Text as="p" variant="body">
            Handelsbetingelser
          </Text>
          <Text as="p" variant="body">
            Privatlivspolitik
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
