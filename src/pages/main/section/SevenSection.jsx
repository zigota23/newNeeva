import React from "react";
import Blog from "../../../components/blog";
import People from "../../../components/people";
import { useStyles } from "./sevenSectionStyle";
import Bill from './../../../img/Bill.png'
import Margo from './../../../img/Margo.png'
import Sridhar from './../../../img/Sridhar.png'
import Vivek from './../../../img/Vivek.png'


const SevenSection = (props)=>{

  const s = useStyles()

  return(
    <div className={s.group}>
      <div className={s.blog}><Blog
        topic='Created and backed by former Google executives'
        pathBlog='From the experts who know search best.'
        textButton='Our Story'
        widthPathBlog={474}
        widthTopic={419}
        
      /></div>
      <div className={s.peoples}>
        <div className={s.firstColumn}>
          <People img={Sridhar} name='Sridhar Ramaswamy' status='CEO &#38; Cofounder at Neeva, ex-SVP at Google'/>
          <People img={Margo} name='Margo Georgiadis' status='Ex-President of Google Americas'/>
        </div>
        <div className={s.secondColumn}> 
          <People img={Vivek} name='Vivek Raghunathan' status='Cofounder at Neeva, ex-VP at Google, Youtube'/>
          <People img={Bill} name='Bill Coughran' status='Ex-SVP of Search at Google'/>
        </div>
        
      </div>
    </div>
  )
}

export default SevenSection