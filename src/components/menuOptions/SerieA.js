import { ClickAwayListener, Fade, Link, MenuItem, MenuList, Paper, Popper, Typography } from '@material-ui/core'
import {useState} from 'react'
import React from 'react'

function SerieA() {

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
          style={{ fontWeight: "bold", fontSize: "17px", color: "white" }}
          data-testid="seriea-typography"
        >
          SERIE A
        </Typography>
        <Popper
          style={{ zIndex: 2 }}
          open={open}
          anchorEl={anchor}
          placement="bottom-start"
          transition
          disablePortal
          data-testid="team-popper"
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                variant="selectedMenu"
                id="fade-menu"
                aria-labelledby="fade-button"
                open={open}
                anchorEl={anchor}
                onClose={handleClose}
                TransitionComponent={Fade}
                disableRestoreFocus
              >
                <MenuItem id="seriea-menu-item" onClick={handleClose}>
                  <Link href="/fixtures" underline="none">
                    FIXTURES
                  </Link>
                </MenuItem>
                <MenuItem id="seriea-menu-item" onClick={handleClose}>
                  <Link href="/table" underline="none">
                    TABLE
                  </Link>
                </MenuItem>
                <MenuItem id="seriea-menu-item" onClick={handleClose}>
                  <Link href="/top-scorers" underline="none">
                    TOP SCORERS
                  </Link>
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Popper>
      </div>
    );
}

export default SerieA
