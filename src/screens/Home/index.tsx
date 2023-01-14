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
  const [tasks, setTasks] = useState<TaskDTO[]>([
    {
      id: uuid.v4().toString(),
      title: 'Lavar a louça',
      isComplete: true
    },

    {
      id: uuid.v4().toString(),
      title: 'Dormir um pouco mais cedo',
      isComplete: false
    },

    {
      id: uuid.v4().toString(),
      title: 'Ir para o trabalho no sábado para testar uma ferramenta',
      isComplete: true
    },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

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
              <Button />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <TasksSection tasks={tasks} />
    </View>
  );
}