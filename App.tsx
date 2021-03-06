import React from 'react';
import { ImageBackground } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import Navigation from './components/Navigation';
import chatReducer from './store/reducers/chat.reducer';
import userReducer from './store/reducers/user.reducer';


const rootReducer = combineReducers({
  chat: chatReducer,
  user: userReducer,
  // posts: PostReducer
});

export type RootState = ReturnType<typeof rootReducer>


const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


export default function App() {

  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  )
}

