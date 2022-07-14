import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { AiOutlineLogin } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { useMediaQuery } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  const [isSmallerThan760] = useMediaQuery("(max-width: 760px)");

  return (
    <Flex py="4" justify="center" mt={20}>
      <Box width="75%">
        <Text color="pink.500" fontSize="2xl" fontWeight="bold" textTransform="capitalize">
          Blogiverse
        </Text>
        <Box backgroundColor="pink.500" height="3px" borderRadius="xl"></Box>
      </Box>
    </Flex>
  );
};

export default Navbar;
