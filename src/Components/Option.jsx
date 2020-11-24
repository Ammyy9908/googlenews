import { IconButton } from '@material-ui/core'
import React from 'react'


function Option({Icon,text,Class}) {
    return (
        <div className={`option ${Class}`}>
            <IconButton><Icon/></IconButton>
            <span>{text}</span>
        </div>
    )
}

export default Option
