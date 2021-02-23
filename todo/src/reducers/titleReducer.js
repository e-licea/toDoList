
export const initialState = {
    title: 'Edit Your Team Name',
    editing: false
}


export const titleReducer = (state=initialState, action)=>{

    switch(action.type){
        case "UPDATE_TITLE":
            return {...state, title: action.payload, editing: false};

        case "TOGGLE_EDIT":
            return {...state, editing: !state.editing};

        default:
            return state;

    }

    //output: newState
}