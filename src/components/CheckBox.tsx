import React, {useContext, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';

interface CheckboxProps {
  checked?: boolean;
  onToggle?: (checked: boolean) => void;
}
const Checkbox: React.FC<CheckboxProps> = () => {
  const [checked, setChecked] = useState(false);
  const {isDarkMode, toggleTheme, theme} = useContext(ThemeContext);

  const handleToggle = () => {
    setChecked(!checked);
  };

  const checkboxStyle = {
    ...styles.checkbox,
    borderColor: theme.textColor,
    backgroundColor: checked ? theme.backgroundColor : 'transparent',
  };

  return (
    <TouchableOpacity onPress={handleToggle} style={styles.checkboxContainer}>
      <View style={[checkboxStyle, checked && styles.checkboxChecked]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
    marginRight: 8,
  },
  checkboxChecked: {
    backgroundColor: '#262933',
  },
});

export default Checkbox;
