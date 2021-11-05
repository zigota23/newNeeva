import { Container, Typography } from "@mui/material";
import React from "react";
import GetStarted from "../../../components/getStarted";
import { useStyles } from "./sixthSectionStyle";


const SixthSection = (props)=>{

  const s = useStyles()

  return(
    <div className={s.container}>
      <div className={s.text}><Typography>Join search designed for you, not advertisers.</Typography></div>
      <div className={s.getStarted}><GetStarted/></div>
    </div>
  )
}

export default SixthSection;