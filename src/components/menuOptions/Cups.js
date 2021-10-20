import { ClickAwayListener, Fade, Link, MenuItem, MenuList, Paper, Popper, Typography } from '@material-ui/core'
import {useState} from 'react'
import React from 'react'




function Cups() {

    const [anchor, setAnchor] = useState(null)


    const handleMenuOpen = (event) =>{
       setAnchor(event.currentTarget)
    }

    const handleClose = () => {
        setAnchor(null)
    }

    const open = Boolean(anchor)


    return (
        <div>
                  <Typography
                 onClick={handleMenuOpen}
                 style={{fontWeight:'bold',fontSize:'17px'}}
                  >CUPS
                </Typography>
                <Popper
                style={{zIndex:2}}
                open={open}
                anchorEl={anchor}
                placement='bottom-start'
                transition
                disablePortal
                >
                <Paper >
                <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                variant='selectedMenu'
                id='fade-menu'
                aria-labelledby= 'fade-button'
                open={open}
                anchorEl={anchor}
                onClose={handleClose}
                TransitionComponent={Fade}
                disableRestoreFocus
                >
            
            <MenuItem onClick={handleClose}>
                 <Link href='champions-league' underline='none'>CHAMPIONS LEAGUE</Link>
             </MenuItem >
                    <MenuItem onClick={handleClose}
                     ><Link href='italian-cup' underline='none'>ITALIAN CUP</Link></MenuItem >
                </MenuList>
                </ClickAwayListener>
                </Paper>
                </Popper>
        </div>
    )
}

export default Cups
