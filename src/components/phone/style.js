import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles({
  divPhone:{
    marginRight:'48px',
    "&:last-child": {
      marginRight: 0,
      marginLeft:"48px",
    },
    display:"flex",
    flexDirection:'column',
  },
  text:{
    '& p':{
      fontSize:'20px',
      height:'80px',
      width:'300px',
      textAlign:"center",
      color:'grey',
      marginTop:'21px',
      margin:"0 auto",
    }
  },
  '@media(max-width:800px)':{
    divPhone:{
      width:'100%',
      marginRight:0,
      marginLeft:0,
      "&:last-child": {
        marginRight: 0,
        marginLeft:0,
      }
    }
  }
    
})