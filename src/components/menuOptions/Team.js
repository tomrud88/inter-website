import { ClickAwayListener, Fade, Link, MenuItem, MenuList, Paper, Popper, Typography } from '@material-ui/core'
import {useState} from 'react'
import React from 'react'




function Team() {

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
                  >TEAM
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
            <Link href="/first-team" underline='none'>FIRST TEAM</Link>
             </MenuItem >
                    <MenuItem onClick={handleClose}>
                    <Link href="/staff"
                    underline='none'>STAFF</Link>
                     </MenuItem >
                    <MenuItem onClick={handleClose}
                     ><Link href="/coach"
                     underline='none'>COACH</Link></MenuItem >
                    <MenuItem onClick={handleClose}
                   ><Link href="/transfers"
                   underline='none'>TRANSFERS</Link></MenuItem >
                </MenuList>
                </ClickAwayListener>
                </Paper>
                </Popper>
                </div>
    )
}

export default Team                