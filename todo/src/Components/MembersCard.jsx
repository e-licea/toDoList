import React from 'react'

export default function MembersCard(props) {
    const member = props.member

    return (
        <div>
            <h3>{member}</h3>
        </div>
    )
}
