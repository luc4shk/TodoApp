import React from "react";
import {Box,Button, Icon} from "@chakra-ui/react"
import { Flex,useColorModeValue, useColorMode, useDisclosure } from "@chakra-ui/react";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import Card from "./Card";
const NavBar = ({setDoneTasks,tasks, doneTasks, setTasks}) =>{
  //Necesarios para el drawer
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  //Definimos variables para el cambio del aspecto
  const {colorMode, toggleColorMode } = useColorMode()
  const bg =  useColorModeValue("rgba(187, 171, 140,0.1)","#443C68")
  const drawerBg =  useColorModeValue("#DED0B6","#393053")


  const restaurarTask = (index) =>{
    let temp = [...doneTasks]
    const task = temp.splice(index,1)
    setDoneTasks(temp)
    setTasks([...tasks,{id:task[0].fecha,nombre:task[0].nombre, desc:task[0].desc}])
  }

  return(
    <>
      <Box 
        display={"flex"}
        p={"0 15px"}
        alignItems={"center"} 
        justifyContent={"center"}
        bg={bg}
        fontSize={"30px"}
        fontWeight={"bold"}
        h ={"70px"}
        w={"100%"}
      > 
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"900px"}
        >
          TO DO
          <Box 
            display={"flex"} 
            gap={"10px"}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button 
                p={"5px"} 
                variant={"primary"} 
                onClick={()=>onOpen()}
              >
                Historial
              </Button>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button  
                variant={"changeMode"} 
                onClick={toggleColorMode}>
                <Icon 
                  as={colorMode === 'light' ? FaMoon : IoMdSunny} 
                  color={colorMode === 'light' ? "white" : "black"}
                >
                </Icon>
              </Button>
            </motion.button>
          </Box>
        </Box>
      </Box>
      {/*Drawer*/}
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor={drawerBg} >
          <DrawerCloseButton />
          <DrawerHeader>Historial De Tareas</DrawerHeader>
          <DrawerBody>
            <Flex flexDir={"column"} gap={"5px"}>
              <AnimatePresence>
                {doneTasks.map((c,i)=>(
                  <motion.div
                    key={c.fecha}
                    layout
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                  >
                    <Card key={c.fecha}
                      nombre={c.nombre}
                      descripcion={c.desc}
                      buttonMsg={"Restaurar"}
                      handleClick={()=>{
                      restaurarTask(i)
                      }}
                    ></Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default NavBar
