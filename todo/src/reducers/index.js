import { combineReducers } from 'redux';

import { membersReducer } from './membersReducer';
import { titleReducer } from './titleReducer';
import { darkModeReducer } from './darkModeReducer';

export const rootReducer = combineReducers({
    membersReducer,
    titleReducer,
    darkModeReducer
})


