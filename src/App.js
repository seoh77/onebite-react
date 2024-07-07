import { Provider } from 'react-redux';
import Main from './pages/Main.jsx';
import store from './commons/store.js';

function App() {
  return (
    <Provider store={store} className="p-10">
      <Main />
    </Provider>
  );
}

export default App;
