import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles({
  phones:{
    display:'flex',
    justifyContent:'center',
  },
  topic:{
    textTransform:'uppercase',
    fontSize:16,
    fontWeight:700,
    textAlign:'center',
    letterSpacing:2,
  },
  container:{
    width:'100%',
    marginTop:'96px'
  },
  '@media(max-width:800px)':{
    phones:{
      flexDirection:'column'
    }
  }
})