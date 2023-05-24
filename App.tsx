import {Provider} from 'react-redux';
import {ThemeProvider} from './src/context/ThemeContext';
import MainComponent from './src/screens/MainComponent';
import {store} from './src/redux/store/todoSlice';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <MainComponent />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
