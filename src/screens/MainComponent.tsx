import React, {useContext, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {Divider, Switch} from 'react-native-paper';
import moment from 'moment';
import Incomplete from '../components/Incomplete';
import Complete from '../components/Complete';
import TaskModal from '../components/Modal';
import {RootState, addTodo} from '../redux/store/todoSlice';

const MainComponent: React.FC = () => {
  const {isDarkMode, toggleTheme, theme} = useContext(ThemeContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [taskInput, setTaskInput] = useState('');

  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const handleAddTask = (task: {task: string; category: string}) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      title: task.task,
      category: task.category,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setModalVisible(false);
    setTaskInput('');
  };

  const closeModal = () => {
    setModalVisible(false);
    setTaskInput('');
  };

  const onToggleSwitch = () => {
    toggleTheme();
  };

  const currentDate = moment().format('MMMM D, YYYY');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.backgroundColor}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.backgroundColor}
      />
      <ScrollView style={styles.mainContainer}>
        <View style={styles.headerStyle}>
          <View>
            <Text style={[styles.textHeader, {color: theme.textColor}]}>
              {currentDate}
            </Text>
          </View>
          <TouchableOpacity onPress={toggleTheme}>
            <Switch value={isDarkMode} onValueChange={onToggleSwitch} />
          </TouchableOpacity>
        </View>
        <View style={styles.statuses}>
          <Text style={styles.statusText}>
            {todos.filter((todo: any) => !todo.completed).length} incomplete,
          </Text>
          <Text style={styles.statusText}>
            {todos.filter((todo: any) => todo.completed).length} completed
          </Text>
        </View>

        <Divider style={styles.dividerStyle} />
        <Incomplete />
        <Complete />
        <TaskModal
          visible={modalVisible}
          onClose={closeModal}
          onAddTask={handleAddTask}
        />
      </ScrollView>
      <TouchableOpacity
        style={styles.plusIcon}
        onPress={() => setModalVisible(true)}>
        <Image source={require('../assets/addTaskIcon.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MainComponent;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textHeader: {
    fontSize: 32,
    fontWeight: '700',
  },
  statusText: {
    paddingVertical: 8,
    color: '#575767',
  },
  dividerStyle: {
    paddingTop: 1,
    marginTop: 8,
    marginBottom: 16,
    color: '#575767',
    opacity: 0.2,
  },
  plusIcon: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 20,
    marginRight: 20,
  },
  statuses: {
    flexDirection: 'row',
    columnGap: 3,
  },
});
