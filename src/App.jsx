import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavBar from './components/NavBar'
import viteLogo from '/vite.svg'
import Fonts from './components/Fonts'
import Card from './components/Card'
import { Text,useColorMode , useColorModeValue, Button, Container} from '@chakra-ui/react'
import { Toaster } from 'react-hot-toast'
import CardList from './components/CardList'

function App() {
  //Definimos el arreglo de tareas
  const [tasks, setTasks] = useState([])
  const [doneTasks, setDoneTasks] = useState([])

  return (
    <>
      <Fonts/>
      <NavBar setDoneTasks={setDoneTasks} tasks={tasks} doneTasks={doneTasks} setTasks={setTasks}/>
      <Container p={"10px"}>
      <CardList tasks={tasks} doneTasks={doneTasks} setDoneTasks={setDoneTasks} setTasks={setTasks}/>
      </Container>
      <Toaster/>
       
    </>
  )
}

export default App
