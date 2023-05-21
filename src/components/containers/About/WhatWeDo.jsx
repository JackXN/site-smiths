import React, { useState } from "react";

import {
  Box,
  Text,
  Image,
  Icon,
  Link,
  IconButton,
  SimpleGrid,
  Grid,
  GridItem,
  Wrap,
  WrapItem,
  Img
} from "@chakra-ui/react";

import Tilt from "react-parallax-tilt";
import Button from "../../common/CustomButton";


const WhatWeDo = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.leftContainer}>
        <Box position={[null, null, null, "relative"]} top="150px">
          <img
            src="/SiteSmithMallet.png"
            style={{
              justifySelf: "flex-end",
              marginTop: "20px",
              height: ["20%", "20%", "20%", "20%", "90%"],
              position: [null, null, null, "relative"],
              top: "50px"
            }}
          />

          <Text as="p" mr="10px" mt="25px">
            <Link
              href="/Gallery"
              fontFamily="Bangers"
              fontSize={["24px"]}
              bg="#E04C4C"
              padding="10px"
              color="white"
              boxShadow="10px 10px rgba(0,0,0,0.2)"
              position={[null, null, null, "relative"]}
              top="50px"
            >
              Get In Touch To Learn More{" "}
            </Link>
          </Text>
        </Box>
      </Box>

      <Box sx={styles.rightContainer}>
        <hr />
        <Text as="h1" color="#504F50">
          What <br /> We Do <IconButton bg="none" />
        </Text>
        <Box sx={styles.contentContainer}>
          <Box display="flex" flexWrap="wrap">
            <Box sx={styles.titleContainer}>
              <Text
                as="h2"
                fontFamily="Roboto"
                fontStyle="italic"
                fontWeight="400"
              >
                We Are Digital
              </Text>
              <Text as="h2" fontFamily="Lobster, cursive" lineHeight="40px">
                <span style={{ color: "#E04C4C" }}>Site Smiths</span> At Your
                Service
              </Text>
            </Box>

            <Box sx={styles.paragraph}>
              <Text as="p">
                Our mission is to create a better digital world and make our
                customers happy. We possess a winning combination of creative,
                technical and people skills that not only make us fun to work
                with, but ensure we get the job done, and done well.
              </Text>

              <Box sx={styles.buttonContainer}>
                <Button text="Read More" isSecondary={true} />
              </Box>
            </Box>
          </Box>
          
          {/* <Box sx={styles.buttonContainer}> */}
            {/* <Button text="Read More" /> */}
          {/* </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: [
      "column",
      "column",
      "column",
      "column",
      "column",
      "row-reverse"
    ],
    textAlign: "left"
  },
  leftContainer: {
    display: "flex",
    alignItems: [null, null, null, null, null, "center"],
    flex: ["1"],
    zIndex: "0",

    flexDirection: "column",

    h1: {
      fontFamily: "Bangers",
      textAlign: "left",
      lineHeight: ["30px", "30px", "30px"],
      fontSize: ["44px", "44px", "44px", "44px"],
      fontWeight: "lighter",
      position: [null, null, null, null, "relative"],
      top: [null, null, null, null, "90px", "150px"]
    },

    titleContainer: {
      flexDirection: "column-reverse",
      justifyContent: "center",
      alignItems: "center",
      color: "#504F50",
      

      h2: {
        fontSize: ["29px"],
        textAlign: "left !important",
        lineHeight: ["35px"]
      }
    },

    hr: {
      width: ["20%", "15%", "10%", "10%"],
      background: "#E04C4C",
      height: "5px",
      mb: ["20px"],
      position: [null, null, null, null, "relative"],
      right: ["68px", "68px", "78px", "40px"],
      top: [null, null, null, null, "90px", "150px"]
    }
  },

  rightContainer: {
    flex: ["1"],
    position: [null, null, null, null, "relative"],
    top: [null, null, null, null, "90px", "150px"],

    h1: {
      fontFamily: "Bangers",
      textAlign: "left",
      lineHeight: ["30px", "30px", "30px"],
      fontSize: ["44px", "44px", "44px", "44px"],
      fontWeight: "lighter",
      position: [null, null, null, null, "relative"],
      top: [null, null, null, null]
    },
    hr: {
      width: ["20%", "15%", "10%", "10%"],
      background: "#E04C4C",
      height: "5px",
      mb: ["20px"]
    }
  },

  titleContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#504F50",

    h2: {
      fontSize: ["29px"],
      textAlign: "left !important",
      lineHeight: ["35px"]
    }
  },
  contentContainer: {
    mt: ["20px"],

    p: {
      mt: ["30px"],
      textAlign: "left",
      fontSize: ["14px"],
      fontFamily: "Merriweather",
      fontWeight: "Medium"
    }
  },

  buttonContainer: {
    justifyContent: "left",
    alignSelf: "left",
    display: "flex",
    mt: ["40px"],
    mb: ["80px"],
    fontSize: ["16px"]
  }
};

export default WhatWeDo;
