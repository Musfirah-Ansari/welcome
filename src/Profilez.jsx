import React from 'react'

function Profilez(props){
    return (
        <React.Fragment>
        {/* <h1>Musfirah</h1>
        <h2>Former Pilot from Jinnah Terminal Airport</h2> */}
                <h1 class={props.designation}>{props.name}</h1>
                <h2>{props.detail}</h2>
        </React.Fragment>
    );
}

export default Profilez