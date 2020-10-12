import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";


function ElevationScroll(props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}


function Header() {
    return (
        <>
            {/* ElevationScroll add a scrolling effect */}
            <ElevationScroll>
                {/* AppBar default = fixed */}
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h4">
                            Sharian Development Project
                        </Typography>
                        <Button   color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </>
    )
}


export default Header