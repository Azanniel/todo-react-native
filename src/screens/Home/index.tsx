import { useState } from 'react';
import { TouchableWithoutFeedback, View, Keyboard } from 'react-native';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { TasksSection } from '../../components/TasksSection';

import { TaskDTO } from '../../dtos/TaskDto';

import { styles } from './styles';

export function Home() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header />

        <View style={styles.form}>
          <Input
            placeholder="Adicione uma nova tarefa"
            value={newTaskTitle}
            onChangeText={setNewTaskTitle}
          />

          <View style={styles.wrapperButton}>
            <Button />
          </View>
        </View>

        <TasksSection />
      </View>
    </TouchableWithoutFeedback>
  );
}