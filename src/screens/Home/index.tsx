import { useEffect, useState } from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Alert,
  ActivityIndicator
} from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { TasksSection } from '../../components/TasksSection';

import { TaskDTO } from '../../dtos/TaskDto';

import { styles } from './styles';
import { THEME } from '../../theme';

export function Home() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [isLoadingTasks, setIsLoadingTasks] = useState(true);

  const taskStorage = useAsyncStorage('@todo-azanniel-app:tasks');

  async function handleFetchTasksFromStorage() {
    const tasksInString = await taskStorage.getItem();
    const tasksInObject = tasksInString ? JSON.parse(tasksInString) : [];

    setTasks(tasksInObject);
    setIsLoadingTasks(false);
  }

  async function handleCreateNewTask() {
    const isNewTaskEmpty = Boolean(newTaskTitle.trim()) === false;

    if (isNewTaskEmpty) {
      setNewTaskTitle('');
      return;
    }

    const newTaskWithoutWhiteSpaces = newTaskTitle.trim();
    const task: TaskDTO = {
      id: uuid.v4().toString(),
      title: newTaskWithoutWhiteSpaces,
      isComplete: false,
    };

    const tasksToStorage = [...tasks, task];

    setTasks(tasksToStorage);
    setNewTaskTitle('');

    await taskStorage.setItem(JSON.stringify(tasksToStorage));

    Keyboard.dismiss();
  }

  async function changeStateOfTask(id: string) {
    const tasksClone = tasks.map(task => {
      return { ...task };
    });

    const tasksWithOneChanged = tasksClone.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }

      return task;
    });

    setTasks([...tasksWithOneChanged]);
    await taskStorage.setItem(JSON.stringify(tasksWithOneChanged));
  }

  function removeTaskFromList(id: string) {
    Alert.alert('Remover tarefa?', 'Confirme a remoção da tarefa.', [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: async () => {
          const tasksWithoutOneDeleted = tasks.filter(task => {
            return task.id !== id;
          });

          setTasks(tasksWithoutOneDeleted);
          await taskStorage.setItem(JSON.stringify(tasksWithoutOneDeleted));
        }
      }
    ]);
  }

  useEffect(() => {
    handleFetchTasksFromStorage();
  }, []);

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

      {isLoadingTasks ? (
        <View style={styles.wrapperActivityIndicator}>
          <ActivityIndicator size='small' color={THEME.COLORS.GRAY_400} />
        </View>
      ) : (
        <TasksSection
          tasks={tasks}
          onChangeState={changeStateOfTask}
          onDelete={removeTaskFromList}
        />
      )}
    </View>
  );
}