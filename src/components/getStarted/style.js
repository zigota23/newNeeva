import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles({
  getStarted:{
    display:'flex',
    marginTop:'40px'
  },
  inputDiv:{
    
    '& input':{
      border:0,
      height: '60px',
      width:'300px',
      border: '1px solid #E3E7E2',
      borderRadius: '100px 0px 0px 100px',
    }
  },
  buttonDiv:{
    '& button':{
      paddingRight:'12px',
      height: '60px',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '24px',
      letterSpacing: '0em',
      textAlign: 'center',
      borderRadius: '0 100px 100px 0',
      backgroundColor:"#415AFF",
      color:'white',
      textAlign:'center',
      display:"flex"
    }
  },
  text:{
    '& p':{
      color:'grey',
      fontSize:' 13',
      textAlign:'start'
    }
    
  },
  '@media(max-width:500px)':{
    inputDiv:{
      '& input':{
        width:'100%',
        borderRadius: '100px'
      }
      
    },
    buttonDiv:{
      '& button':{
        fontSize:12,
        borderRadius: '100px',
        marginTop:20,
        marginBottom:20
      }
    },
    getStarted:{
      flexDirection:'column'
    }
  }

})