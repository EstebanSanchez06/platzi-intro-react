import React from 'react'
import {BsCheckLg} from 'react-icons/fa'
import {TodoIcon} from'./index'

function CompleteIcon({completed, onComplete}){
    return(
        <TodoIcon
        type="check"
        color={completed ? 'green' : 'gray'}
        onClick={onComplete}
        />
    )
}

export {CompleteIcon}