import React, { useEffect, useState } from "react"

const ProfileStatus = (props) => {
    const [status, upSetStatus] = useState(props.status)
    const [editMode, toggleEditMode] = useState(false)

    let onUpdateStatus = (e) =>{
        props.updateStatus(e.target.value)


    }
    useEffect(()=>{
        upSetStatus(props.status)

    },[props.status])

    
    let editModeAC = (TF)=>{
        toggleEditMode(TF)
    }
    
    return (
        <div>
            {(!editMode
                 ?<span onDoubleClick={()=>{editModeAC(true)}}>{(['',null,undefined].includes(status) ?"Write Your Status Here" :status)}</span>
                 :<input onChange={onUpdateStatus} onBlur={()=>{editModeAC(false)}} value={status} type="text"></input>)}
        </div>
    )
}
export default ProfileStatus