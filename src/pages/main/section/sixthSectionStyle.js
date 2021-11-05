import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles({
  container:{
    width:"100%",
    marginTop:200
  },
  getStarted:{
    width:'100%',
    display:"flex",
    justifyContent:'center'
  },
  text:{
    '& p':{
      letterSpacing:2.25,
      textAlign:'center',
      fontSize:64,
      fontWeight:'bold',
    }
  },
  '@media(max-width:1200px)':{
    text:{
      '& p':{
        fontSize:44,
        marginLeft:24,
        marginRight:24
      }
    },
    getStarted:{
      marginLeft:0,
      marginTop:0,
      padding:'0 44px'
    },
  },
  '@media(max-width:1000px)':{
    text:{
      '& p':{
        textAlign:'start'
      }
    }
  },
  '@media(max-width:500px)':{
    text:{
      '& p':{
        fontSize:34,
      }
    }
  }
})