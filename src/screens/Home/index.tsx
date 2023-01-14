import { useState } from 'react';
import { TouchableWithoutFeedback, View, Keyboard } from 'react-native';
import uuid from 'react-native-uuid';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { TasksSection } from '../../components/TasksSection';

import { TaskDTO } from '../../dtos/TaskDto';

import { styles } from './styles';

export function Home() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateNewTask() {
    const isNewTaskEmpty = Boolean(newTaskTitle.trim()) === false;

    if(isNewTaskEmpty) {
      setNewTaskTitle('');
      return;
    }

    const newTaskWithoutWhiteSpaces = newTaskTitle.trim();
    const task: TaskDTO = {
      id: uuid.v4().toString(),
      title: newTaskWithoutWhiteSpaces,
      isComplete: false,
    };

    setTasks(prevState => [...prevState, task]);
    setNewTaskTitle('');
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Header />

          <View style={styles.form}>
            <Input
              placeholder="Adicione uma nova tarefa"
              value={newTaskTitle}
              onChangeText={setNewTaskTitle}
            />

            <View style={styles.wrapperButton}>
              <Button onPress={handleCreateNewTask} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <TasksSection tasks={tasks} />
    </View>
  );
}