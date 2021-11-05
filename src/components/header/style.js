import { makeStyles } from "@mui/styles"


export const useStyles = makeStyles({
  logo:{
    '& p':{
      color:"black",
      fontWeight:"bold",
      fontSize:25
    }
    
  },
  headerBar:{
    display:"flex",
    textAlign:'left',
    backgroundColor:'white !important',
    boxShadow:'none !important',
  },
  itemMenu:{
    marginLeft:24,
    color:'black',
    "&:first-child": {
      marginLeft: 0
    }
  },
  menu:{
    display:'flex',
    marginLeft:'20px',
    alignItems:'self-start',
  },
  burgerMenu:{
    display:'none'
  },
  '@media(max-width:600px)':{
    menu:{
      display:'none'
    },
    itemMenu:{
      marginRight:24,
      marginTop:10,
      "&:first-child": {
        marginLeft: 24,
        marginTop:0
      }
    },
    burgerMenu:{
      display:"block"
    },
    headerBar:{
      width:'100%',
      '& div':{
        justifyContent:'space-between'
      }
      
    }
  }
})