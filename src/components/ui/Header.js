import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import makeStyles from "@material-ui/core/styles/makeStyles";


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

const useStyles = makeStyles((theme) => ({
    tabContainer:{
        marginLeft: "auto"
    },
    tab:{
        minWidt: 5,
        marginLeft: "1%"
    }
}));

function Header() {
    const classes = useStyles()
    return (
        <>
            {/* ElevationScroll add a scrolling effect */}
            <ElevationScroll>
                {/* AppBar default = fixed */}
                <AppBar>
                    <Toolbar>
                        Sharian Development Project

                        <Tabs className={classes.tabContainer}>
                            <Tab label="About Us"/>
                            <Tab label="Login"/>
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </>
    )
}


export default Header