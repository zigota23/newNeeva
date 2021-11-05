import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles({
  blog:{
    display:'flex',
    marginTop:105
  },
  divImg:{
    marginRight:'100px'
  },
  '@media(max-width:1200px)':{
    divImg:{
      display:'none'
    }
  }
})