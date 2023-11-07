import React from 'react'

function Alart(props) {
    return (
        props.alart && <div>
            <div className={`alert alert-${props.alart.type} mt-`} role="alert">
                {props.alart.messege}
            </div>



        </div>
    )
}

export default Alart