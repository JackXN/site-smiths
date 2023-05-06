
import React, { useState } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

const FloatingArrow = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      position="fixed"
      bottom="20px"
      right="20px"
      zIndex="100"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      cursor="pointer"
    >
      <IconButton
        icon={<ArrowDownIcon />}
        variant="ghost"
        borderRadius="50%"
        bg="white"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.25)"
        transition="all 0.3s ease-in-out"
        transform={isHovered ? "translateY(4px)" : ""}
      />
    </Box>
  );
};

export default FloatingArrow;