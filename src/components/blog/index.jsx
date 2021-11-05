import ArrowForward from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";
import React from "react";
import { useStyles } from "./style";



const Blog = (props)=>{

  const s = useStyles()

  return(
    <div className={s.blog}>
      <div className={s.didUKnow}>Did You Know</div>
      <div className={s.topic}>{props.topic}</div>
      <div className={s.pathBlog}>{props.pathBlog}</div>
      <div className={s.divButton} ><Button variant='contained' endIcon={<ArrowForward/>}>{props.textButton}</Button></div>
    </div>
  )
}


export default Blog

