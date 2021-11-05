import { Typography } from '@mui/material'
import React from 'react'
import { useStyles } from './style'


const Phone = (props)=>{

  const s = useStyles()

  return(
    <div className={s.divPhone}>
      <div className={s.text}><Typography>{props.text}</Typography></div>
      <div><img src={props.img}/></div>
    </div>
  )
}


export default Phone