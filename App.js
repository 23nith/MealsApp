import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import MainNavigation from './navigation/MainNavigation';
import mealsReducer from './store/reducers/meals';

const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
        <MainNavigation/>
    </Provider>
  );
}

