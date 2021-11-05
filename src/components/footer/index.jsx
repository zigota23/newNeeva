import { AppBar , Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./style";
import img from '../../img/footer1.png'
import twitter from '../../img/twitter.png'
import facebook from '../../img/facebook.png'
import instagram from '../../img/instagram.png'
import linkedIn from '../../img/linkedIn.png'


const Footer = (props)=>{

  const arr1 = ['Home','Features','About','Blog','Press','Community','Learn']
  const arr2 = ['Contact','Careers','Terms','Privacy','Bill of Rights','DMCA','Neeva Web Crawler']
  const arr3 = [twitter,facebook,instagram,linkedIn]


  const s = useStyles()

  return(
   <div className={s.footer}>
      <div className={s.firstColunm}>
          <div className={s.divImg}><img src={img}/></div>
          <div className={s.bar}>
            <div className={s.firstColunmBar}>
              {arr1.map(text=>(<div className={s.barText}><Typography>{text}</Typography></div>))}
            </div>
            <div className={s.secondColunmBar}>
              {arr2.map(text=>(<div className={s.barText}><Typography>{text}</Typography></div>))}
            </div>
        </div>
      </div>
      <div className={s.secondColunm}>
          <div className={s.links}>
            {arr3.map(img=>(<div className={s.link}><img src={img}/></div>))}
          </div>
          <div className={s.bottomText}><Typography>© 2021 Neeva Inc</Typography></div>
      </div>
      
   </div>
  )
}

export default Footer