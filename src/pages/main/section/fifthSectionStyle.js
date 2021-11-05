import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles({
  blog:{
    display:'flex',
    marginTop:105,
    width:'100%',
  },
  divImg:{
    marginLeft:'100px',
    flexGrow:1,
    '& img':{float:"right"}
  },
  '@media(max-width:1200px)':{
    divImg:{
      display:'none'
    }
  }
})

