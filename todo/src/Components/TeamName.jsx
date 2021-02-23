import React, { useState, useReducer } from 'react'
import { connect } from 'react-redux';
//reducer
import { titleReducer, initialState } from '../reducers/titleReducer';
//img
import edit from '../img/icons/edit.svg'


function TeamName() {
    // const [team, setTeam] = useState('Team Name')
    // const [editing, setEditing] = useState(false);

    const [newTeamName, setNewTeamName ] = useState('');
    const [state, dispatch] = useReducer(titleReducer, initialState)
    
    console.log(state)
    
    const handleChanges = (e)=>{
        setNewTeamName(e.target.value)
    }


    return (
        <div>
            {!state.editing?
            <>
                {/* Tell Reducer to toggle editing attribute */}
                <h1 onClick = {()=>dispatch({type: "TOGGLE_EDIT"})}>{state.title}
                <img className = 'edit-icon' src={edit} alt=""/>
                </h1>
                
            </>
            :
            <>
                <input
                    name= 'newTeamName'
                    type = 'text'
                    value = {newTeamName}
                    onChange = {handleChanges}
                />
                <button
                    onClick ={()=>{
                        //Tell reducer to update title 
                        dispatch({type: "UPDATE_TITLE", payload: newTeamName})
                    }
                    }
                >Update Team Name</button>
            </>

            }
        </div>
    )
}

export default connect(null, {})(TeamName);