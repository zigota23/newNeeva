import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  footer:{
    display:'flex',
    width:'100%',
    justifyContent:'space-between',
    padding:'0 24px',
    marginTop:48,
    marginBottom:48
  },
  links:{
    display:'flex',
    float:'right',
    '& :first-child':{
      marginLeft:0
    }
  },
  bar:{
    display:'flex',
    marginLeft:96
  },
  firstColunm:{
    display:'flex',
  },
  secondColunm:{
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'column'
  },
  barText:{
    marginBottom:10,
    fontSize:14,
    color:'#191919'
  },
  firstColunmBar:{
    marginRight:96,
    '& :last-child':{
      marginBottom:0
    }
  },
  secondColunmBar:{
    '& :last-child':{
      marginBottom:0
    }
  },
  link:{
    marginLeft:34
  },
  '@media(max-width:800px)':{
    footer:{
      flexDirection:'column'
    },
    secondColunm:{
      marginTop:50,
      flexDirection:'row'
    },
    bar:{
      marginLeft:0,
    },
    firstColunm:{
      justifyContent:'space-between',
      width:'100%'
    },
    firstColunmBar:{
      marginRight:20
    }
  }
})