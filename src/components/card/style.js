import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles({
  text:{
    '& p':{
      fontSize:20
    },
    marginBottom:38
  },
  container:{
    padding:87,
    marginRight:32,
    marginTop:56,
    border:'1px solid rgba(0, 0, 0, 0.12)',
    borderRadius:16,
    boxShadow:'0px 12px 24px rgba(0, 0, 0, 0.12)',
    marginBottom:200,
    width:'50%',
  },
  img:{
    float:'left',
  },
  bottomText:{
    textAlign:'start'
  },
  text2:{
    color:'#737980',
    letterSpasing:1.5,
    fontSize:12
  },
  name:{
    letterSpasing:1.5,
    fontSize:12
  },
  '@media(max-width:1800px)':{
    container:{
      paddingLeft:40,
      paddingRight:40,
    }
  },
  '@media(max-width:1500px)':{
    container:{
      marginBottom:0
    }
  },
  '@media(max-width:800px)':{
    container:{
      paddingLeft:20,
      paddingRight:20,
      paddingTop:40,
      paddingBottom:40,
    }
  },
  '@media(max-width:500px)':{
    container:{
      width:'100%',
      marginTop:20,
      paddingLeft:40,
      paddingRight:40,
      marginBottom:50
    }
  }

})