import React from 'react'
import {useStyles} from './fifthSectionStyle'
import img from './../../../img/frame2.png'
import Blog from '../../../components/blog'



const FifthSection = (props)=>{

  const s = useStyles()

  return(
    <div className={s.blog}>
      <Blog 
      topic={'1000s of trackers follow you every week?'} 
      pathBlog={'We block all trackers to keep your data safe.'}
      textButton={'See Our Bill of Rights'}
      className={s.text}
      />
      <div className={s.divImg}><img src={img}/></div>
    </div>
  )

}

export default FifthSection

