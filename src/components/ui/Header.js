import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";


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
                <AppBar>
                    <Toolbar>
                        Sharian Development
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </>
    )
}


export default Header