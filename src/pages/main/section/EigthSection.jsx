import {Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./eigthSectionStyle";
import card1 from '../../../img/card1.png'
import card2 from '../../../img/card2.png'
import Card from './../../../components/card'


const EightSection = (props)=>{

  const s = useStyles()

  return(
    <div>
      <div className={s.topic}><Typography>Why people love Neeva</Typography></div>
      <div className={s.cards}>
        <div className={s.firstRow}>
          <Card text='“Neeva makes it so much easier to focus on what I want to read now that I don&#39;t have to dodge all the ads.”' bottomText={{name:'Jeanie S.',text:'retired'}}/>
          <Card img={card1} text='“It will not show any advertisements and it will not collect or profit from user data. ”'/>
        </div>
        <div className={s.secondRow}>
          <Card text='“Excellent results. For scientific queries, Neeva places legitimate science and medical results front and center.”' bottomText={{name:'Mike T.',text:'IT Project Manager'}}/>
          <Card img={card2} text='“Neeva users will pay...to get the search results they want rather than what advertisers want them to see.”'/>
          </div>
        </div>
        
    </div>
  )
}


export default EightSection