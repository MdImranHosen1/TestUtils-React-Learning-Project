import React from 'react'

function Alart(props) {
    return (


        <div style={{ height: "60px" }}>
            {props.alart && <div>
                <div className={`alert alert-${props.alart.type} mt-`} role="alert">
                    {props.alart.messege}
                </div>

            </div>}
        </div>

    )
}

export default Alart