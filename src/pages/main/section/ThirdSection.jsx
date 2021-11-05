import { Grid, ImageList, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./thirdSection";
import img1 from '../../../img/newNorkGimes.png'
import img2 from '../../../img/fortune.png'
import img3 from '../../../img/forbes.png'
import img4 from '../../../img/wired.png'


const ThirdSelection = (props)=>{

  const s = useStyles();

  return(
    <div className={s.container}>
      <Typography className={s.topic}>featured by</Typography>
      <div className={s.images}>
        <div><img src={img1}/></div>
        <div><img src={img2}/></div>
        <div><img src={img3}/></div>
        <div><img src={img4}/></div>
      </div>
    </div>  
  )
}


export default ThirdSelection