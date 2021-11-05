import React from 'react'
import { useStyles } from './firstSectionStyle.js'
import { Container, Grid, Icon, Typography } from '@mui/material'
import img from './../../../img/Rectangle.png'
import GetStarted from '../../../components/getStarted/index.jsx'

const FirstSection = (props)=>{

  const s = useStyles()
  return(
    <Container className={s.firstSection}>
      <Grid container colums={2}>
        <Grid item xs={12} md={6} className={s.firstColums}>
          <div className={s.firstColumsText}><Typography>Real search results only.</Typography></div>
          <div className={s.firstColumsText}><Typography>No ads ever.</Typography></div>
          <div className={s.firstColumsText}><Typography>Created by ex-Google execs, Neeva gives you a private, ad-free search experience with only real results.</Typography></div>
          <GetStarted/>
        </Grid>
        <Grid item xs={6} className={s.secondColums}>
          <img src={img}/>
        </Grid>
      </Grid>
    </Container>
  )
}


export default FirstSection;