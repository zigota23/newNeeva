import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles({
  container:{
    display:"flex"
  },
  text:{
    width:'100%',
    '& p':{
      letterSpasing:1.8,
      fontSize:55,
      textAlign:'start',
      margin:'0 110px',
      paddingRight:40
    }
  },
  secondColumn:{
    paddingRight:112,
    width:'50%',
    '& img':{
      float:'right'
    }
  },
  getStarted:{
    marginLeft:110,
    marginTop:61
  },
  '@media(max-width:1500px)':{
    container:{
      marginTop:70
    }
  },
  '@media(max-width:1200px)':{
    secondColumn:{
      display:'none'
    },
    text:{
      '& p':{
        fontSize:35,
        marginRight:0,
        marginLeft:44,
      }
    },
    getStarted:{
      marginLeft:0,
      marginTop:0,
      padding:'0 44px'
    },
  },
  '@media(max-width:500px)':{
    text:{
      '& p':{
        fontSize:30
      }
    }
  }
})