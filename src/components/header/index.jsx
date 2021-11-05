import { AppBar, Toolbar, Typography ,Drawer, Button, List, SwipeableDrawer} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useStyles } from "./style";
import MenuIcon from '@mui/icons-material/Menu';


const Header = (props)=>{

  const s = useStyles()
  let [mode,setMode] = useState(false)

  const changeMode = ()=>{
    setMode(!mode)
  }

  const itemMenu = ['Sing In','Features','FAQ','Blog','Press','About']

  return(
    <AppBar className={s.headerBar}> 
      <Toolbar>
        <div className={s.logo} ><Typography>neeva</Typography></div>
        <div className={s.menu}> 
          {itemMenu.map(item=>(<div className={s.itemMenu}><Typography >{item}</Typography></div>))}
        </div>
        <div className={s.burgerMenu}>
          <div onClick={changeMode}><Button><MenuIcon/></Button></div>
          <Drawer
            open={mode}
            anchor='right'
          >
            <Box>
              <div><Button onClick={changeMode}>close</Button></div>
              <List>
              {itemMenu.map(item=>(<div className={s.itemMenu}><Typography >{item}</Typography></div>))}
              </List>
            </Box>
          </Drawer>
        </div>
        
      </Toolbar>
    </AppBar>
  )
}

export default Header;