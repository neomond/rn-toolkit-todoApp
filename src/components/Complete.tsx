import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {ThemeContext} from '../context/ThemeContext';
import {useDispatch, useSelector} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import {RootState, toggleTodo} from '../redux/store/todoSlice';

const Complete = () => {
  const {theme} = useContext(ThemeContext);
  const [toggleCheckBox, setToggleCheckBox] = useState(true);
  const dispatch = useDispatch();

  const completeTodos = useSelector((state: RootState) =>
    state.todos.filter((todo: any) => todo.completed),
  );
  console.log(completeTodos);

  const completeTodo = (id: any) => {
    dispatch(toggleTodo(id));
  };

  return (
    <ScrollView>
      <Text style={[styles.textHead, {color: theme.textColor}]}>Completed</Text>
      <View style={styles.checkBoxWrapper}>
        <View>
          {completeTodos.map((todo: any) => (
            <Pressable
              key={todo.id}
              style={styles.mappeddataValue}
              onPress={() => completeTodo(todo.id)}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                style={[
                  styles.checkbox,
                  {
                    backgroundColor: theme.backgroundColor,
                  },
                ]}
                hideBox
                boxType="square"
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <View style={styles.categoriesStyle}>
                <Text style={[styles.textItem, {color: theme.textColor}]}>
                  {todo.title}
                </Text>
                <Text style={[styles.textItemCategory]}>{todo.category}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Complete;

const styles = StyleSheet.create({
  textHead: {
    fontWeight: '700',
    fontSize: 18,
    paddingBottom: 12,
    marginTop: 20,
  },
  textItem: {
    fontWeight: '500',
    fontSize: 16,
    flexDirection: 'column',
    color: '#575767',
  },
  checkBoxWrapper: {
    flexDirection: 'column',
  },
  mappeddataValue: {
    flexDirection: 'row',
    columnGap: 12,
    marginBottom: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#DADADA',
    backgroundColor: '#141419',
  },
  textItemCategory: {
    fontSize: 12,
    color: '#575767',
    fontWeight: '500',
  },
  categoriesStyle: {
    flexDirection: 'column',
    rowGap: 2,
  },
});
