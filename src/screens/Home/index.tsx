import { TouchableWithoutFeedback, View, Keyboard } from 'react-native';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { TasksSection } from '../../components/TasksSection';

import { styles } from './styles';

export function Home() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header />

        <View style={styles.form}>
          <Input />

          <View style={styles.wrapperButton}>
            <Button />
          </View>
        </View>

        <TasksSection />
      </View>
    </TouchableWithoutFeedback>
  );
}