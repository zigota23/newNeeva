import { makeStyles } from "@mui/styles";



export const useStyles = makeStyles({

  container:{
    width:'100%',
    margin:'0 auto',
    marginTop:'60px',
  },
  images:{
    display:'flex',
    justifyContent:'space-between',
    margin:'0 208px'
  },
  topic:{
    textTransform:'uppercase',
    fontSize:'16px !important',
    fontWeight:'700 !important',
    marginBottom:'24px !important'
  },
  '@media(max-width:1200px)':{
    images:{
      flexDirection:'column'
    }
  },
  '@media(max-width:800px)':{
    images:{
      margin:'0 auto'
    }
  }
  
})