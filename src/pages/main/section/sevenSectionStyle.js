import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles({
  peoples:{
    display:"flex",
    '& div:first-child':{
      marginBottom:62
    }
  },
  firstColumn:{
    marginRight:149,
  },
  group:{
    display:'flex',
    marginTop:150
  },
  '@media(max-width:1200px)':{
    group:{
      flexDirection:'column-reverse',
    },
    peoples:{
      flexDirection:"column"
    },
    firstColumn:{
      marginRight:0
    }
  },
  '@media(max-width:500px)':{
    peoples:{
      marginBottom:50
    }
  }
})