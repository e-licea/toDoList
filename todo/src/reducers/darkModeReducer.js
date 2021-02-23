export const initialState = {
    theme: "light"
}


export const darkModeReducer = (state=initialState, action)=>{
    switch(action.type){
        case "LIGHT_MODE":
            return {...state, theme: action.payload}
        case "DARK_MODE":
            return {...state, theme: action.payload}
        default:
            return state;
    }
}