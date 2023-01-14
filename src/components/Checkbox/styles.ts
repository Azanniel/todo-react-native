import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,

    padding: 3
  },

  checkboxChecked: {
    backgroundColor: THEME.COLORS.PURPLE_DARK,
    borderRadius: 24/2,

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkboxCheckedHover: {
    backgroundColor: THEME.COLORS.PURPLE,
  },

  checkboxUnchecked: {
    backgroundColor: 'transparent',

    flex: 1,
    
    borderWidth: 2,
    borderColor: THEME.COLORS.BLUE,
    borderRadius: 24/2
  },

  checkboxUncheckedHover: {
    backgroundColor: 'rgba(30, 111, 159, 0.2)'
  }
});