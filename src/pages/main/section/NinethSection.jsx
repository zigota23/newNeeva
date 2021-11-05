import { Typography } from "@mui/material";
import React from "react";
import GetStarted from "../../../components/getStarted";
import { useStyles } from "./ninthSectionStyle";
import img from '../../../img/dog.png'

const NinthSection = (props)=>{

  const s = useStyles()

  return(
    <div className={s.container}>
      <div className={s.firstColumn}>
        <div className={s.text}><Typography>Because you pay for Neeva, we're accountable to you (never advertisers).</Typography></div>
        <div className={s.getStarted}><GetStarted/></div>
      </div>
      <div className={s.secondColumn}>
        <img src={img}/>
      </div>
    </div>
  )
}

export default NinthSection