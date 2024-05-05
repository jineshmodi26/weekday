import './App.css';
import SearchJobs from './pages/SearchJobs';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchJobs />
      </div>
    </Provider>
  );
}

export default App;
