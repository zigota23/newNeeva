import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles({
  peoples:{
    width:'50%',
    justifyContent:'end',
    marginRight:104,
    display:"flex",
    '& div:first-child':{
      marginBottom:62
    }
  },
  firstColumn:{
    marginRight:149,
  },
  blog:{
    marginLeft:60,
    width:'50%',
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