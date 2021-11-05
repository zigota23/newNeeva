import { makeStyles } from "@mui/styles";

export const useStyles=makeStyles({
  didUKnow:{
    textTransform:'uppercase',
    fontSize:'16px',
    fontWeight:'700',
  },
  topic:{
    textTransform:'uppercase',
    fontSize:'32px',
    fontWeight:'700',
    marginTop:'8px'
  },
  pathBlog:{
    textTransform:'uppercase',
    fontSize:'50px',
    fontWeight:'700',
    marginTop:'29px',
    marginBottom:'100px'
  },
  blog:{
    textAlign:'start',
    width:'50%',
    paddingLeft:144
  },
  divButton:{
    '& button':{
      backgroundColor:'#F5FF93',
      borderRadius:'36px',
      color:"black",
      width:242,
      height:72
    }
    
  },
  '@media(max-width:1200px)':{
    blog:{
      paddingLeft:70,
      paddingRight:70,
      width:'100%'
    },
    topic:{
      fontSize:20
    },
    didUKnow:{
      fontWeight:500
    },
    pathBlog:{
      fontSize:30
    }
  }
})