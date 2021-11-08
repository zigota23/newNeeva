import React from "react";
import { useStyles } from "./fouthSelectionStyle";
import img from '../../../img/frame.png';
import Blog from "../../../components/blog";


const FouthSelection = (props)=>{

  const s = useStyles()

  return(
    <div className={s.blog}>
      <div className={s.divImg}><img src={img}/></div>
      <Blog 
      topic={'1000s of trackers follow you every week?'} 
      pathBlog={'We block all trackers to keep your data safe.'}
      textButton={'See Our Bill of Rights'}
      className={s.text}
      widthPathBlog={462}
      widthTopic={352}
      />
    </div>
  )
}

export default FouthSelection;