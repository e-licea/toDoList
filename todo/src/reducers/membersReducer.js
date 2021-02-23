import { createStore } from "redux"

export const ADD_MEMBER = "ADD_MEMBER"
export const RMV_MEMBER = "RMV_MEMBER"

export const initialState = {
    members: [ 
        'Zhou Ming',
        'Ashley To',
        'Carlos Lee'
    ]
}

export const membersReducer = (state = initialState, action)=>{

    switch(action.type){
        case ADD_MEMBER:
            return{...state, members: [...state.members, action.payload]}
        case RMV_MEMBER:
            return {...state, members: [
                ...state.members.slice(0, action.payload),
                ...state.members.slice(action.payload + 1)
            ]}
        default:
            return state;
    }
}

const store = createStore(membersReducer);