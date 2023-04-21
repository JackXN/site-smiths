import React from "react";
import * as Scroll from "react-scroll";
import {
  Box,
  Text,
  Link,
  Image,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";

const DesktopNav = () => {
  const Link = Scroll.Link;

  return (
    <header className="relative z-20 flex items-center justify-between w-full h-20">
    {/* <a href="#" class="text-3xl text-gray-100 leading-tight">Un-<br />cover</a> */}

    <ul className="flex text-sm text-white capitalize body-font font-Poppins">
        <li>
            <Link
               activeClass="active"
               to="home"
               spy={true}
               smooth={true}
               offset={50}
               duration={500}
               style={{ fontFamily: "Montserrat", cursor: "pointer " }}

            
            
            > Home</Link>
        </li>
        <li className="ml-4">
            <a href="#">About</a>
        </li>
        <li className="ml-4">
            <a href="#">Services</a>
        </li>
        <li className="ml-4">
            <a href="">Contact</a>
        </li>
    </ul>
</header>
  )

};

export default DesktopNav;