import React from 'react'
import Phone from '../../../components/phone'
import { useStyles } from './secondSectionStyle'
import phone1 from '../../../img/Phone.png'
import phone2 from '../../../img/Phone2.png'
import { Container } from '@mui/material'


const SecondSection = (props)=>{

  const s = useStyles()

  return(
    <div className={s.container} > 
      <div className={s.topic}>did you know</div>
      <div className={s.phones}>
        <Phone text={'40% of your search results are actually ads?'} img={phone1}/>
        <Phone text={'100% real results with Neeva'} img={phone2}/>
      </div>
    </div>
    
  )
}


export default SecondSection