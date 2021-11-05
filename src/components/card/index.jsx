import { Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./style";



const Card = (props)=>{

  const s = useStyles()

  return(
    <div className={s.container}>
      <div className={s.text}><Typography>{props.text}</Typography></div>
      {props.img&&<div className={s.img}><img src={props.img}/></div>}
      {props.bottomText&&<div className={s.bottomText}><div className={s.name}><Typography>{props.bottomText.name}</Typography></div><div className={s.text2}><Typography>{props.bottomText.text}</Typography></div></div>}
    </div>
  )
}

export default Card