import React, {useEffect, useRef, useState} from "react";
import Card from "./Card";
import { Flex, Input, Button, Text, border} from "@chakra-ui/react";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

const CardList = ({tasks, setTasks,doneTasks,setDoneTasks}) =>{
  //Ref
  const TaskName = useRef()
  const DescName = useRef()

  //Estilos para el cambio de color
  const borderColor =  useColorModeValue("rgba(187, 171, 140,0.3)","#443C68")
  const backgroundColor =  useColorModeValue("#DED0B6 ","#18122B")
  const iconColor =  useColorModeValue("#BBAB8C","#443C68")
  const textColor =  useColorModeValue("black","white")
  const secundaryIconColor =  useColorModeValue("black","white")


  useEffect(()=>{
  })


  const addTask = () =>{
    const regex = /^\s*[\S]+.*$/;
    if(regex.test(TaskName.current.value)&&regex.test(DescName.current.value)){
      setTasks([...tasks,{id:Date.now(),nombre:TaskName.current.value, desc:DescName.current.value}])
      TaskName.current.value=""
      DescName.current.value=""
    }else{
      toast.error('Ingrese correctamente los datos', {
        style: {
          padding: '10px',
          backgroundColor:backgroundColor,
          color:textColor
        },
        iconTheme: {
          primary: iconColor,
          secondary: secundaryIconColor,
        },
      });
    }
  }

  // Método para eliminar una tarea
  const deleteTask = (indice) =>{
    const temp = [...tasks]
    temp.splice(indice,1)
    setTasks(temp)
  }



  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y:[20,0] }}
        exit={{ opacity: 0 }}

      >
        <form onSubmit={(e)=>{
          e.preventDefault()
          addTask()
        }}>
          <Flex w={"100%"} flexDir={["column","column","row","row"]} gap={"10px"}>
            <Input ref={TaskName} borderWidth={"2px"} borderColor={borderColor} placeholder="Tarea"/>
            <Input ref={DescName} borderWidth={"2px"} borderColor={borderColor} placeholder="Descripción"/>
            <motion.button
              whileTap={{ scale: 0.8 }}
              style={{width:"100%"}}
            >
              <Button type={"submit"} width={"100%"} variant={"primary"}>
                Agregar Tarea
              </Button>
            </motion.button>
          </Flex>
        </form>

        <motion.div

        >
          <Flex p={"20px 0"} gap={"10px"} flexDir={"column"}>
            {tasks.length===0?
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y:[20,0] }}
                exit={{ opacity: 0 }}
                transition={{duration:0.5}}
              >
                <Text w={"100%"} textAlign={"center"}>No hay tareas para mostrar</Text>
              </motion.div>
              :
              <AnimatePresence>
                {
                  tasks.map((c,i)=>(
                    <motion.div
                      key={c.id}
                      layout
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                    >

                      <Card 
                        key={c.id} 
                        nombre={c.nombre} 
                        descripcion={c.desc} 
                        buttonMsg={"Completado"}
                        handleClick={()=>{
                          deleteTask(i)
                          if(doneTasks.length==10){
                            doneTasks.shift()
                          }
                          setDoneTasks([...doneTasks,{fecha: Date.now(),nombre:c.nombre, desc:c.desc}])
                        }}/>
                    </motion.div>

                  ))
                }
              </AnimatePresence>
            }
          </Flex>

        </motion.div>
      </motion.div>
    </>
  )
}
export default CardList
