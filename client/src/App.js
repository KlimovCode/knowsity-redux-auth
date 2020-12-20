import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './App.css'
import Login from './components/Login/Login'
import Registration from './components/Registration/Registration'
import rootReducer from './store/reducers'

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Login />
        <Registration />
      </div>
    </Provider>
  );
}

