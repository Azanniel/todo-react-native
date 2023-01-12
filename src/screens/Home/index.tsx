import { View } from 'react-native';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';

import { styles } from './styles';
import { Button } from '../../components/Button';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.form}>
        <Input />

        <View style={styles.wrapperButton}>
          <Button />
        </View>
      </View>
    </View>
  );
}