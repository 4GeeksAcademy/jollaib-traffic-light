import React, {useState} from "react";


const Light = ({lightColor, brightness, onClick}) => {

    return (
        <div className="mx-auto my-auto mt-3" onClick={onClick} style={{borderRadius: '50%', backgroundColor: lightColor, height: '50px', width: '50px', boxShadow: brightness,}}>
        </div>
    );
};


export default Light;