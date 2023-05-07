import React from "react";
import { Box, Text, Link, Image } from "@chakra-ui/react";
import Button from "../../common/CustomButton";
import Span from '../../common/Highlighter';

const ShowCaseSection = () => {
  return (
    <Box sx={styles.showcaseContainer}>
        <Box sx={styles.rightContainer}>
          <Box sx={styles.headerTwo}>
            <hr />
            <h1>
              Elevate Your business With a <Span text='professional'/>
              Online presence
            </h1>
          </Box>
          <Box sx={styles.infoContainer}>
          <Text as="p">
            Looking to take your business to the next level? Consider leveraging
            the power of a professional online service. With the right partner,
            you can optimize your digital presence, streamline your operations,
            and connect with customers like never before. Whether youre a
            startup looking to establish a foothold or an established business
            seeking to expand, theres never been a better time to elevate your
            brand and grow your bottom line with a professional online service.
            So what are you waiting for? Explore your options today and take
            your business to new heights!
          </Text>
        
        </Box>
        <Box sx={styles.buttonContainer}>
            <Button text="Read More"  />
          </Box>
        </Box>
<Box sx={styles.leftContainer}>

        <figure
          className="overflow-y-auto overflow-x-hidden h-[550px] w-full lg:max-w-lg mx-auto relative scrollbar-hide header-img mt-10"
          style={{
            transform: "rotateX(20deg)",
            boxShadow: "4px 8px 24px rgba(0,0,0,.3)",
            borderRadius: "20px",

            transition: ".24s"
          }}
        >
          <Image
            src="/src/assets/images/showcaseImage.png"
            alt="project Showcase"
            borderRadius="20px"
          />
        </figure>
    

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          mt={["64px"]}
          fontSize="20px"
          fontFamily="Merriweather"
          fontWeight="medium"
        >

          <Text as='p'>

          </Text>
          <Text as="p" mr="10px">
            <Link
              href="/Gallery"
              fontFamily="Bangers"
              fontSize={["24px"]}
              bg="#E04C4C"
              padding="10px"
              color="white"
              boxShadow="10px 10px rgba(0,0,0,0.2)"
            >
              Check Out Some Of Our Work{" "}
            </Link>
          </Text>
        </Box>
        </Box>
      </Box>
    
  );
};

const styles = {
  showcaseContainer: {
    mt: ["150px"],
    display: "flex",
    // flexDirection: ['column-reverse'],
    flexDirection: ["column","column","column","column",'row']
  },

  leftContainer: {
    
    flex: 1
  },

  rightContainer: {
    flex:1,
  },

  infoContainer: {
    p: {
      mt: ["30px"],
      mb: "40px",
      textAlign: "left",
      fontSize: ["14px"],
      fontFamily: "Merriweather",
      fontWeight: "medium"
    },

    buttonContainer: {
      mt: ["40px"],
      mb: ["80px"],
      fontSize: ["30px"],
      
    }
  },

  paragraph: {
    mt: ["30px"],
    textAlign: "left",
    fontSize: ["14px"],
    fontFamily: "Merriweather",
    fontWeight: "Medium"
  },

  headerTwo: {
    fontSize: "30px",
    h1: {
      fontFamily: "Bangers",
      textAlign: "left",
      lineHeight: ["50px", "50px", "50px"],
      fontSize: ["44px", "44px", "44px", "44px"],
      fontWeight: "lighter",
      color: '#504F50'
    },
    hr: {
      width: ["20%", "15%", "10%", "10%"],
      background: "#E04C4C",
      height: "5px",
      mb: ["20px"],
      // position:[null,null,null,null,'relative'],
      right: ["68px", "68px", "78px", "40px"],
      top: [null, null, null, null, "90px", "150px"]
    }
  }
};

export default ShowCaseSection;
