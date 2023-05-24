export const addTodo = (task: any) => {
  return {
    type: 'ADD_TODO',
    payload: task,
  };
};

export const toggleTodoCompletion = (todoId: any, checked: any) => {
  return {
    type: 'TOGGLE_TODO_COMPLETION',
    payload: {todoId, completed: checked},
  };
};
