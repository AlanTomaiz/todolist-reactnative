import { useState } from "react";
import { Alert, Image, TextInput, TouchableOpacity, View } from "react-native";

import Logo from '../../../assets/logo.png';
import Plus from '../../../assets/plus.png';
import { Badge } from "../../components/badge";
import { Task } from "../../components/task";
import { styles } from "./style";

type TasksProps = {
  id: number
  task: string
  done: boolean
}

export default function Home() {
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [task, setTask]= useState<string>('')

  function handleRegisterTask() {
    const id = Date.now()
    setTasks(state => [...state, { id, task, done: false }])
    setTask('')
  }

  function handleCompletedTask(id: number) {
    setTasks(state => state.map(task => {
      if (task.id === id) {
        task.done = true
      }

      return task
    }))
  }

  function handleRemoveTask(id: number) {
    Alert.alert(
      'WoOl!',
      'Certeza que deseja remover essa task?',
      [
        {
          text: 'Sim',
          onPress: () => setTasks(state => state.filter(task => task.id !== id))
        },
        {
          text: 'Não'
        }
      ]
    )
  }

  return (
    <>
     <View style={styles.header}>
      <Image source={Logo} resizeMode="contain" />
     </View>
     <View style={styles.body}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegisterTask}>
          <Image source={Plus} />
        </TouchableOpacity>
      </View>
      <View style={[styles.infos, tasks.length ? { borderColor: 'transparent' } : {}]}>
        <Badge name="Criadas" value={tasks.length} color="#4EA8DE" />
        <Badge name="Concluídas" value={tasks.filter(task => task.done).length} color="#8284FA" />
      </View>
      {tasks.map(({ id, task, done }) => (
        <Task
          key={id}
          task={task}
          completed={done}
          onDone={() => handleCompletedTask(id)}
          onRemove={() => handleRemoveTask(id)}
        />
      ))}
     </View>
    </>
  )
}
