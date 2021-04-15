import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';


function Layout({children}) {
    return (
        <div>
             <AppBar position="static">
                <Toolbar variant="dense">
                <IconButton edge="start"  color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit">
                    Blog Posts
                </Typography>
               
                </Toolbar>
              
            </AppBar>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
