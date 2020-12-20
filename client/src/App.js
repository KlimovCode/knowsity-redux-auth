import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './App.css'
import LoginContainer from './components/Login/LoginContainer'
import RegistrationContainer from './components/Registration/RegistrationContainer'
import rootReducer from './store/reducers'

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LoginContainer />
        <RegistrationContainer />
      </div>
    </Provider>
  );
}

