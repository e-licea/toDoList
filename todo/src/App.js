import React from 'react';
import  { createStore } from  'redux';
import { Provider } from 'react-redux';
//components
import TeamName from './Components/TeamName';
import Members from './Components/Members';

//reducers
import { rootReducer } from './reducers/'

//store
const store = createStore( rootReducer )

export default function App() {
  return (
    <div className = 'App'>
      <Provider store = {store}>
        <TeamName/>
        <Members/>
      </Provider>
    </div>
  )
}
