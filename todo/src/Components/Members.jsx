import React, { useReducer, useState } from 'react';
import { connect } from 'react-redux';
//components
import MembersCard from './MembersCard'
//reducers
import { membersReducer, initialState, ADD_MEMBER, RMV_MEMBER} from '../reducers/membersReducer';
//img
import remove from '../img/icons/minus.svg'
function Members() {
    
    const [state, dispatch] = useReducer(membersReducer, initialState)
    const [newMember, setNewMember] = useState('');

    const handleChanges = e =>{
        setNewMember(e.target.value)
    }
    console.log(state)
    
    
    return (
        <div>
            <input 
           type="text" 
           name="newMember" 
           value = {newMember}
           onChange = {handleChanges}
           />
           <button 
                onClick = {()=>{
                dispatch({type: ADD_MEMBER, payload: newMember})
                setNewMember('')
           }}>Add Teamate</button>
           {
               state.members.map((member, index)=>{
                   return(
                       <>
                       <div className = 'member'>
                           <span id={index}>
                               <h3>{member}</h3>
                                <img src={remove} alt=""
                                onClick= {
                                    ()=>{
                                        dispatch({type:RMV_MEMBER, payload: index})
                                    }
                                }
                                />
                           </span>
                       </div>
                       <MembersCard
                        member={member}
                       />
                       </>
                   )
               })
           }

        </div>
    )
}

const mapSateToProps = state =>{
    return{
        members: state.members
    }
}

export default connect (mapSateToProps,{})(Members);