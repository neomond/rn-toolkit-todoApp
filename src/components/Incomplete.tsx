import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {ThemeContext} from '../context/ThemeContext';
import {useDispatch, useSelector} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import {RootState, Todo, toggleTodo} from '../redux/store/todoSlice';

const Incomplete = () => {
  const {isDarkMode, toggleTheme, theme} = useContext(ThemeContext);

  const data = useSelector((state: RootState) =>
    state.todos.filter((todo: Todo) => !todo.completed),
  );
  const dispatch = useDispatch();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const toggleTodoHandler = (id: number) => {
    dispatch(toggleTodo(id));
  };

  return (
    <ScrollView style={styles.mainCont}>
      <Text style={[styles.textHead, {color: theme.textColor}]}>
        Incompleted
      </Text>
      <View style={styles.checkBoxWrapper}>
        {data &&
          data.map((todo: Todo) => (
            <View style={styles.mappedWrapper} key={todo.id}>
              <Pressable
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  columnGap: 12,
                }}
                onPress={() => toggleTodoHandler(todo.id)}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  hideBox
                  boxType="square"
                  style={[
                    styles.checkbox,
                    {backgroundColor: theme.backgroundColor},
                  ]}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text
                  key={todo.id}
                  style={[styles.textItem, {color: theme.textColor}]}>
                  {todo.title}
                </Text>
              </Pressable>
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

export default Incomplete;

const styles = StyleSheet.create({
  mainCont: {
    marginBottom: 20,
  },
  textHead: {
    fontWeight: '700',
    fontSize: 18,
    paddingBottom: 12,
  },
  textItem: {
    fontWeight: '500',
    fontSize: 16,
    flexDirection: 'column',
  },
  checkBoxWrapper: {
    flexDirection: 'column',
    rowGap: 12,
  },
  mappedWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: 8,
  },
  pressableStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#DADADA',
    backgroundColor: '#2B2D37',
  },
});
