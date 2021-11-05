import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles({
  cards:{
    display:'flex',
    padding:"0 32px",
  },
  topic:{
    marginTop:62,
    '& p':{
      textAlign:'start',
      marginLeft:44,
      letterSpacing:1.5,
      fontSize:40,
      fontWeight:700
    }
  },
  firstRow:{
    display:"flex"
  },
  secondRow:{
    display:'flex'
  },
  '@media(max-width:1500px)':{
    cards:{
      flexDirection:'column'
    }
  },
  '@media(max-width:500px)':{
    topic:{
      '& p':{
        fontSize:30
      }
    },
    firstRow:{
      flexDirection:'column'
    },
    secondRow:{
      flexDirection:'column'
    }
  }
})