import { Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./style";



const People = (props)=>{

  const s = useStyles()

  return(
    <div className={s.people}>
      <div className={s.divImg}><img src={props.img}/></div>
      <div className={s.name}><Typography>{props.name}</Typography></div>
      <div className={s.status}><Typography>{props.status}</Typography></div>
    </div>
  )
}

export default People;