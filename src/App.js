import { Provider } from 'react-redux';
import './App.css';
import { store } from './components/redux/store/store';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;