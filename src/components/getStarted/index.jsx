import { Button, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./style";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const GetStarted = (props)=>{
  const s = useStyles()
  return(
    <div>
      <div className={s.getStarted}>
        <div className={s.inputDiv}><input placeholder='Enter email to sign up'/></div>
        <div className={s.buttonDiv}><Button endIcon={<ArrowForwardIcon/>} variant='contained'><Typography className={s.testButton}>Get Started</Typography></Button></div>
      </div>
      <div className={s.text}><Typography >No credit card required to sign up. Get 3 months free, then just $4.95 per month.</Typography></div>
    </div>

  )
}

export default GetStarted