import React from "react"
import {Box, Heading, Flex, Text, Button} from "@chakra-ui/react"
import { useColorModeValue, useColorMode } from "@chakra-ui/react";



const Card = ({nombre, descripcion,handleClick, buttonMsg}) =>{
  const bg =  useColorModeValue("rgba(187, 171, 140,0.3)","#443C68")
  return(
    <Box p={"10px"} borderRadius={"md"} bg={bg} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
      <Flex flexDir={"column"}>
        <Heading size={"md"}>{nombre}</Heading>
        <Text>{descripcion}</Text>
      </Flex>
      <Button onClick={handleClick} variant={"primary"}>{buttonMsg}</Button>
    </Box>
  )
}

export default Card
