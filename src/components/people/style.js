import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles({
  name:{
    '& p':{
      fontSize:24,
    }
    
  },
  status:{
    '& p':{
      fontSize:20,
      
    }
  },
  people:{
    width:179,
    textAlign:'start'
  },
  divImg:{
    marginBottom:'0 !important'
  },
  '@media(max-width:1200px)':{
    people:{
      width:"100%",
      textAlign:'center'
    }
  }
})