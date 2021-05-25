import { Box, Flex } from "@theme-ui/components";
import Image from "next/image";
import Link from "next/link";

import { colors, PADDING_CONTAINER, WIDTH_CONTAINER_PX } from "../theme/theme";

export default function Header() {
  return (
    <Flex
      px={PADDING_CONTAINER}
      sx={{
        borderBottom: `1px solid ${colors.gray5}`,
        justifyContent: "center",
      }}
    >
      <Flex
        sx={{
          width: WIDTH_CONTAINER_PX,
          height: "100px",
          borderBottom: `1px solid ${colors.gray5}`,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Link href="/">
            <Box sx={{ cursor: "pointer" }}>
              <svg
                width="150"
                viewBox="0 0 411 107"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.4 70.9C34.4 72.2333 34.7 73.3333 35.3 74.2C35.9667 75.0667 36.7333 75.7667 37.6 76.3C38.5333 76.8333 39.5 77.2333 40.5 77.5C41.5667 77.7 42.5 77.8 43.3 77.8V82C42.5 82 41.5 81.9667 40.3 81.9C39.1 81.7667 37.8667 81.6333 36.6 81.5C35.3333 81.3667 34.1 81.2667 32.9 81.2C31.7 81.0667 30.7 81 29.9 81C29.1 81 28.1 81.0667 26.9 81.2C25.7 81.2667 24.4667 81.3667 23.2 81.5C21.9333 81.6333 20.7 81.7667 19.5 81.9C18.3 81.9667 17.3 82 16.5 82V77.8C17.3667 77.8 18.3333 77.7 19.4 77.5C20.4667 77.2333 21.4333 76.8333 22.3 76.3C23.1667 75.7667 23.9 75.0667 24.5 74.2C25.1 73.3333 25.4 72.2333 25.4 70.9V31.3C25.4 28.8333 25.3333 26.8 25.2 25.2C25.1333 23.5333 24.8667 22.2667 24.4 21.4C23.9333 20.4667 23.2667 19.8333 22.4 19.5C21.5333 19.1 20.3333 18.9 18.8 18.9V15.4C20.4667 15.4 21.9 15.3 23.1 15.1C24.3667 14.9 25.5 14.6 26.5 14.2C27.5 13.8 28.4 13.3333 29.2 12.8C30.0667 12.2667 30.9667 11.7 31.9 11.1H34.4V70.9ZM35.7 -5.24521e-06C37.1 -5.24521e-06 38.7667 0.0666625 40.7 0.199998C42.6333 0.33333 44.6333 0.666663 46.7 1.2C48.7667 1.66666 50.8 2.4 52.8 3.4C54.8 4.33333 56.6 5.6 58.2 7.2C59.8 8.8 61.0667 10.8 62 13.2C63 15.5333 63.5 18.3667 63.5 21.7C63.5 24.9 63.0333 27.6333 62.1 29.9C61.2333 32.1667 60.1 34.0667 58.7 35.6C57.3 37.0667 55.7667 38.2 54.1 39C52.4333 39.7333 50.8 40.1667 49.2 40.3V40.7C51.8 40.7 54.4667 41.2333 57.2 42.3C60 43.3667 62.5 45.0333 64.7 47.3C66.9667 49.5 68.8333 52.3333 70.3 55.8C71.7667 59.2 72.5 63.3 72.5 68.1C72.5 73.5 71.3333 78.0333 69 81.7C66.6667 85.3667 63.6333 88.3333 59.9 90.6C56.1667 92.8667 51.9 94.4667 47.1 95.4C42.3667 96.4 37.5667 96.9 32.7 96.9C28.8333 96.9 25.0667 96.6 21.4 96C17.7333 95.4 14.4667 94.5 11.6 93.3C8.8 92.1 6.53333 90.6 4.8 88.8C3.06667 87.0667 2.2 85.0667 2.2 82.8C2.2 81.2 2.7 80.2333 3.7 79.9C3.36667 79.7 3 79.2667 2.6 78.6C2.2 77.9333 1.83333 77.1333 1.5 76.2C1.16667 75.2 0.866667 74.1 0.6 72.9C0.333334 71.6333 0.2 70.3667 0.2 69.1C0.2 68.1 0.3 66.9667 0.5 65.7C0.766667 64.3667 1.23333 63.1 1.9 61.9C2.63333 60.6333 3.63333 59.5 4.9 58.5C6.23333 57.5 7.96667 56.8 10.1 56.4L10.7 56.9C9.96667 58.5667 9.46667 60.3667 9.2 62.3C9 64.1667 8.9 65.9667 8.9 67.7C8.9 73.3 9.8 77.7333 11.6 81C13.4667 84.2 15.7 86.6333 18.3 88.3C20.9 89.9667 23.5667 91 26.3 91.4C29.1 91.8667 31.4667 92.1 33.4 92.1C36.9333 92.1 40.4 91.7 43.8 90.9C47.2 90.1 50.2333 88.7667 52.9 86.9C55.6333 85.1 57.8333 82.7667 59.5 79.9C61.1667 76.9667 62 73.4 62 69.2C62 64.7333 61.2667 60.9333 59.8 57.8C58.3333 54.6 56.4667 52 54.2 50C51.9333 47.9333 49.4333 46.4333 46.7 45.5C43.9667 44.5667 41.3333 44.1 38.8 44.1V40.1C41 40.1 43 39.6 44.8 38.6C46.6667 37.6 48.2333 36.2667 49.5 34.6C50.7667 32.8667 51.7333 30.9 52.4 28.7C53.1333 26.5 53.5 24.2 53.5 21.8C53.5 19.4 53.1 17.1667 52.3 15.1C51.5667 13.0333 50.4 11.2667 48.8 9.79999C47.2 8.26666 45.1333 7.09999 42.6 6.3C40.1333 5.43333 37.1667 5 33.7 5C28.9667 5 25.1 5.76666 22.1 7.3C19.1667 8.83333 16.8333 10.8667 15.1 13.4C13.4333 15.8667 12.2667 18.6667 11.6 21.8C11 24.8667 10.7 28 10.7 31.2C7.56667 31.2 5.33333 30.6 4 29.4C2.66667 28.2 2 26.5667 2 24.5C2 22.5667 2.46667 21 3.4 19.8C4.4 18.6 5.53333 18 6.8 18C6.26667 17.4667 5.93333 16.7667 5.8 15.9C5.66667 14.9667 5.6 14.2333 5.6 13.7C5.6 11.4333 6.5 9.46666 8.3 7.8C10.1667 6.06666 12.5333 4.63333 15.4 3.5C18.2667 2.3 21.4667 1.43333 25 0.899995C28.6 0.299995 32.1667 -5.24521e-06 35.7 -5.24521e-06ZM104.655 83.4C101.321 83.4 98.2214 82.8333 95.3547 81.7C92.5547 80.5 90.088 78.8333 87.9547 76.7C85.8214 74.5667 84.1547 72 82.9547 69C81.7547 66 81.1547 62.6333 81.1547 58.9C81.1547 55.1 81.7547 51.7333 82.9547 48.8C84.1547 45.8667 85.8214 43.4 87.9547 41.4C90.088 39.3333 92.5547 37.8 95.3547 36.8C98.2214 35.7333 101.321 35.2 104.655 35.2C107.921 35.2 110.988 35.7333 113.855 36.8C116.721 37.8 119.221 39.3333 121.355 41.4C123.488 43.4 125.155 45.8667 126.355 48.8C127.555 51.7333 128.155 55.1 128.155 58.9C128.155 62.7 127.555 66.1 126.355 69.1C125.155 72.1 123.488 74.6667 121.355 76.8C119.221 78.9333 116.721 80.5667 113.855 81.7C110.988 82.8333 107.921 83.4 104.655 83.4ZM104.755 78.8C107.221 78.8 109.321 78.2667 111.055 77.2C112.788 76.1333 114.221 74.7 115.355 72.9C116.488 71.0333 117.321 68.9 117.855 66.5C118.388 64.1 118.655 61.5667 118.655 58.9C118.655 56.3 118.388 53.8333 117.855 51.5C117.321 49.1667 116.488 47.1667 115.355 45.5C114.221 43.7667 112.755 42.4 110.955 41.4C109.221 40.4 107.121 39.9 104.655 39.9C102.188 39.9 100.055 40.4 98.2547 41.4C96.5214 42.3333 95.088 43.6667 93.9547 45.4C92.8214 47.0667 91.988 49.0667 91.4547 51.4C90.9214 53.7333 90.6547 56.2333 90.6547 58.9C90.6547 61.5667 90.9214 64.1 91.4547 66.5C91.988 68.9 92.8214 71.0333 93.9547 72.9C95.1547 74.7 96.6214 76.1333 98.3547 77.2C100.155 78.2667 102.288 78.8 104.755 78.8ZM172.73 55.9C172.73 53.4333 172.664 51.4 172.53 49.8C172.464 48.1333 172.197 46.8667 171.73 46C171.264 45.0667 170.597 44.4333 169.73 44.1C168.864 43.7 167.664 43.5 166.13 43.5V40.5C167.797 40.5 169.197 40.4 170.33 40.2C171.53 40 172.597 39.7 173.53 39.3C174.464 38.9 175.33 38.4333 176.13 37.9C176.93 37.3667 177.797 36.8 178.73 36.2H181.73V71.7C181.73 73.0333 181.93 74.1333 182.33 75C182.797 75.8667 183.33 76.5667 183.93 77.1C184.597 77.6333 185.33 78.0333 186.13 78.3C186.997 78.5 187.83 78.6 188.63 78.6V82.1C187.097 81.9 185.764 81.7333 184.63 81.6C183.564 81.4 182.197 81.3 180.53 81.3C178.264 81.3 175.997 81.5333 173.73 82L172.73 81V75.4C171.997 76.5333 171.23 77.6 170.43 78.6C169.697 79.5333 168.797 80.3667 167.73 81.1C166.664 81.7667 165.43 82.3 164.03 82.7C162.63 83.1667 160.964 83.4 159.03 83.4C152.364 83.4 147.597 81.3667 144.73 77.3C141.864 73.1667 140.364 67.2 140.23 59.4C140.164 55.8 140.064 52.9667 139.93 50.9C139.864 48.7667 139.63 47.1667 139.23 46.1C138.83 44.9667 138.197 44.2667 137.33 44C136.464 43.6667 135.23 43.5 133.63 43.5V40.5C135.297 40.5 136.697 40.4 137.83 40.2C139.03 40 140.097 39.7 141.03 39.3C141.964 38.9 142.83 38.4333 143.63 37.9C144.43 37.3667 145.297 36.8 146.23 36.2H149.23V57.3C149.23 61.3667 149.497 64.7667 150.03 67.5C150.564 70.2333 151.297 72.4333 152.23 74.1C153.23 75.7667 154.397 76.9667 155.73 77.7C157.064 78.3667 158.53 78.7 160.13 78.7C161.997 78.7 163.697 78.2333 165.23 77.3C166.83 76.3 168.164 74.9333 169.23 73.2C170.364 71.4667 171.23 69.4333 171.83 67.1C172.43 64.7 172.73 62.1333 172.73 59.4V55.9ZM209.72 71.1C209.72 74.5667 209.886 77.3667 210.22 79.5C210.62 81.6333 211.12 83.2667 211.72 84.4C212.32 85.6 212.986 86.4 213.72 86.8C214.52 87.2 215.32 87.4 216.12 87.4C217.053 87.4 217.82 87.3 218.42 87.1C219.086 86.9 219.686 86.6333 220.22 86.3L221.22 87.2C220.486 88.9333 219.486 90.2 218.22 91C217.02 91.8667 215.653 92.3 214.12 92.3C212.186 92.3 210.553 91.9 209.22 91.1C207.953 90.3 207.32 89.2333 207.32 87.9C204.586 87.9 202.786 86.7333 201.92 84.4C201.12 82.0667 200.72 78.6333 200.72 74.1V40.9H194.12V36.2H194.72C196.52 36.2 198.053 35.8 199.32 35C200.653 34.1333 201.786 33.0333 202.72 31.7C203.72 30.3667 204.553 28.8667 205.22 27.2C205.953 25.4667 206.62 23.7333 207.22 22H209.72V36.2C212.12 36.1333 214.086 35.9667 215.62 35.7C217.22 35.3667 218.386 34.8333 219.12 34.1C220.653 34.3667 221.653 34.9333 222.12 35.8C222.586 36.6 222.82 37.3 222.82 37.9C222.82 38.7 222.553 39.4 222.02 40C221.553 40.5333 220.886 40.9667 220.02 41.3C219.22 41.6333 218.286 41.8667 217.22 42C216.153 42.1333 215.086 42.2 214.02 42.2C212.553 42.2 211.12 42.1 209.72 41.9V71.1ZM230.558 20.4C230.558 18.4 231.258 16.7333 232.658 15.4C234.058 14 235.724 13.3 237.658 13.3C239.591 13.3 241.224 14 242.558 15.4C243.958 16.7333 244.658 18.4 244.658 20.4C244.658 22.4 243.958 24.1 242.558 25.5C241.224 26.8333 239.591 27.5 237.658 27.5C235.724 27.5 234.058 26.8333 232.658 25.5C231.258 24.1 230.558 22.4 230.558 20.4ZM241.858 72.1C241.858 73.4333 242.058 74.5333 242.458 75.4C242.924 76.2667 243.458 76.9667 244.058 77.5C244.724 78.0333 245.458 78.4333 246.258 78.7C247.124 78.9 247.958 79 248.758 79V82C247.958 82 247.058 81.9667 246.058 81.9C245.124 81.7667 244.124 81.6333 243.058 81.5C241.991 81.3667 240.958 81.2667 239.958 81.2C239.024 81.0667 238.158 81 237.358 81C236.558 81 235.658 81.0667 234.658 81.2C233.724 81.2667 232.724 81.3667 231.658 81.5C230.591 81.6333 229.558 81.7667 228.558 81.9C227.624 81.9667 226.758 82 225.958 82V79C227.758 79 229.358 78.5 230.758 77.5C232.158 76.5 232.858 74.7 232.858 72.1V54.9C232.858 52.4333 232.791 50.4 232.658 48.8C232.591 47.1333 232.324 45.8667 231.858 45C231.391 44.0667 230.724 43.4333 229.858 43.1C228.991 42.7 227.791 42.5 226.258 42.5V39.5C227.924 39.5 229.324 39.4 230.458 39.2C231.658 39 232.724 38.7 233.658 38.3C234.591 37.9 235.458 37.4333 236.258 36.9C237.058 36.3667 237.924 35.8 238.858 35.2H241.858V72.1ZM277.278 83.4C273.678 83.4 270.511 82.8 267.778 81.6C265.045 80.4 262.745 78.7333 260.878 76.6C259.011 74.4 257.611 71.8 256.678 68.8C255.745 65.8 255.278 62.5 255.278 58.9C255.278 54.7 255.911 51.1333 257.178 48.2C258.511 45.2 260.211 42.7333 262.278 40.8C264.411 38.8667 266.811 37.4667 269.478 36.6C272.211 35.6667 274.978 35.2 277.778 35.2C280.778 35.2 283.345 35.7 285.478 36.7C287.678 37.6333 289.811 39.3667 291.878 41.9C292.278 40.5 292.911 39.4 293.778 38.6C294.645 37.8 295.645 37.2333 296.778 36.9C297.911 36.5667 299.111 36.3667 300.378 36.3C301.645 36.2333 302.878 36.2 304.078 36.2V39.2C303.211 39.2 302.478 39.4 301.878 39.8C301.345 40.1333 300.911 41.1 300.578 42.7C300.311 44.2333 300.111 46.5667 299.978 49.7C299.911 52.7667 299.878 57.0333 299.878 62.5V97.1C299.878 98.4333 300.078 99.5333 300.478 100.4C300.945 101.267 301.478 101.967 302.078 102.5C302.745 103.033 303.478 103.4 304.278 103.6C305.145 103.867 305.978 104 306.778 104V107C305.978 107 305.078 106.933 304.078 106.8C303.145 106.733 302.145 106.633 301.078 106.5C300.011 106.367 298.978 106.233 297.978 106.1C297.045 106.033 296.178 106 295.378 106C294.578 106 293.678 106.033 292.678 106.1C291.745 106.233 290.745 106.367 289.678 106.5C288.611 106.633 287.578 106.733 286.578 106.8C285.645 106.933 284.778 107 283.978 107V104C285.778 104 287.378 103.5 288.778 102.5C290.178 101.5 290.878 99.7 290.878 97.1V78.4C288.678 80.4 286.378 81.7333 283.978 82.4C281.645 83.0667 279.411 83.4 277.278 83.4ZM277.778 78.8C280.045 78.8 282.045 78.3 283.778 77.3C285.511 76.2333 286.911 74.8 287.978 73C289.111 71.2 289.945 69.1333 290.478 66.8C291.078 64.4 291.378 61.8333 291.378 59.1C291.378 56.5 291.111 54.0667 290.578 51.8C290.045 49.4667 289.211 47.4333 288.078 45.7C286.945 43.9 285.511 42.5 283.778 41.5C282.111 40.5 280.078 40 277.678 40C275.278 40 273.245 40.5 271.578 41.5C269.911 42.4333 268.578 43.7667 267.578 45.5C266.578 47.1667 265.845 49.1667 265.378 51.5C264.978 53.7667 264.778 56.2333 264.778 58.9C264.778 61.5 264.978 64 265.378 66.4C265.778 68.8 266.478 70.9333 267.478 72.8C268.478 74.6 269.811 76.0667 271.478 77.2C273.145 78.2667 275.245 78.8 277.778 78.8ZM349.098 55.9C349.098 53.4333 349.031 51.4 348.898 49.8C348.831 48.1333 348.564 46.8667 348.098 46C347.631 45.0667 346.964 44.4333 346.098 44.1C345.231 43.7 344.031 43.5 342.498 43.5V40.5C344.164 40.5 345.564 40.4 346.698 40.2C347.898 40 348.964 39.7 349.898 39.3C350.831 38.9 351.698 38.4333 352.498 37.9C353.298 37.3667 354.164 36.8 355.098 36.2H358.098V71.7C358.098 73.0333 358.298 74.1333 358.698 75C359.164 75.8667 359.698 76.5667 360.298 77.1C360.964 77.6333 361.698 78.0333 362.498 78.3C363.364 78.5 364.198 78.6 364.998 78.6V82.1C363.464 81.9 362.131 81.7333 360.998 81.6C359.931 81.4 358.564 81.3 356.898 81.3C354.631 81.3 352.364 81.5333 350.098 82L349.098 81V75.4C348.364 76.5333 347.598 77.6 346.798 78.6C346.064 79.5333 345.164 80.3667 344.098 81.1C343.031 81.7667 341.798 82.3 340.398 82.7C338.998 83.1667 337.331 83.4 335.398 83.4C328.731 83.4 323.964 81.3667 321.098 77.3C318.231 73.1667 316.731 67.2 316.598 59.4C316.531 55.8 316.431 52.9667 316.298 50.9C316.231 48.7667 315.998 47.1667 315.598 46.1C315.198 44.9667 314.564 44.2667 313.698 44C312.831 43.6667 311.598 43.5 309.998 43.5V40.5C311.664 40.5 313.064 40.4 314.198 40.2C315.398 40 316.464 39.7 317.398 39.3C318.331 38.9 319.198 38.4333 319.998 37.9C320.798 37.3667 321.664 36.8 322.598 36.2H325.598V57.3C325.598 61.3667 325.864 64.7667 326.398 67.5C326.931 70.2333 327.664 72.4333 328.598 74.1C329.598 75.7667 330.764 76.9667 332.098 77.7C333.431 78.3667 334.898 78.7 336.498 78.7C338.364 78.7 340.064 78.2333 341.598 77.3C343.198 76.3 344.531 74.9333 345.598 73.2C346.731 71.4667 347.598 69.4333 348.198 67.1C348.798 64.7 349.098 62.1333 349.098 59.4V55.9ZM394.587 78.9C395.587 78.9 396.587 78.8 397.587 78.6C398.587 78.3333 399.52 77.9 400.387 77.3C401.32 76.6333 402.153 75.7333 402.887 74.6C403.687 73.4 404.387 71.8333 404.987 69.9C406.52 69.9 407.787 70.2667 408.787 71C409.787 71.7333 410.287 72.8667 410.287 74.4C410.287 75.8 409.82 77.0667 408.887 78.2C408.02 79.3333 406.82 80.3 405.287 81.1C403.82 81.8333 402.087 82.4 400.087 82.8C398.153 83.2 396.12 83.4 393.987 83.4C390.32 83.4 387.087 82.8333 384.287 81.7C381.487 80.5 379.153 78.8667 377.287 76.8C375.42 74.6667 373.987 72.1 372.987 69.1C372.053 66.1 371.587 62.8 371.587 59.2C371.587 51.7333 373.553 45.8667 377.487 41.6C381.42 37.3333 387.02 35.2 394.287 35.2C395.153 35.2 396.02 35.2333 396.887 35.3C397.753 35.3667 398.553 35.5333 399.287 35.8C400.02 36 400.62 36.3333 401.087 36.8C401.553 37.2 401.787 37.7333 401.787 38.4C402.787 38.4 403.787 38.6 404.787 39C405.853 39.4 406.82 40 407.687 40.8C408.62 41.6 409.353 42.6333 409.887 43.9C410.487 45.1 410.787 46.5667 410.787 48.3C410.787 50.7667 410.187 52.8 408.987 54.4C407.787 56 406.253 57.3 404.387 58.3C402.587 59.2333 400.587 59.9 398.387 60.3C396.253 60.6333 394.22 60.8 392.287 60.8C390.087 60.8 388.02 60.6333 386.087 60.3C384.22 59.9667 382.62 59.5667 381.287 59.1V59.5C381.287 62.3 381.52 64.9 381.987 67.3C382.453 69.7 383.187 71.7667 384.187 73.5C385.253 75.1667 386.62 76.5 388.287 77.5C390.02 78.4333 392.12 78.9 394.587 78.9ZM393.487 39.9C389.887 39.9 387.12 41.2 385.187 43.8C383.253 46.4 382.02 50 381.487 54.6C382.62 55.3333 384.153 55.8333 386.087 56.1C388.087 56.3 389.987 56.4 391.787 56.4C395.387 56.4 397.887 55.8333 399.287 54.7C400.753 53.5667 401.487 51.6 401.487 48.8C401.487 45.4667 400.72 43.1667 399.187 41.9C397.653 40.5667 395.753 39.9 393.487 39.9Z"
                  fill="black"
                />
              </svg>
            </Box>
          </Link>
        </Box>

        <Flex>
          <Box as="ul" sx={{ display: "flex" }}>
            <Box as="li" p="3">
              <Link href="/products">
                <a>Products</a>
              </Link>
            </Box>
            <Box as="li" p="3">
              <Link href="/about-us">
                <a>About us</a>
              </Link>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
