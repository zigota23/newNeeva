import { makeStyles } from "@mui/styles"



export const useStyles = makeStyles({

  firstSection:{
    marginTop:'120px !important',
    maxWidth:'calc(1920px * 0.9) !important'
  },
  firstColums:{
    textAlign:'left',
    '& :nth-child(3)':{
      '& p':{
        fontSize:'20px',
        marginTop:'47px',
      }
    }
  },
  secondColums:{
    '& img':{
      display:'block',
      float:'right',
    }
  },
  firstColumsText:{
    '& p':{
      fontSize:'55px'
    }
  },
  '@media(max-width:1250px)':{
    firstColumsText:{
      '& p':{
        fontSize:45
      }
    }
  }
  ,'@media(max-width:900px)':{
    secondColums:{
      display:'none'
    }
  }
})