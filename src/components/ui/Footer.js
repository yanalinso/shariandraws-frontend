import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    appBar: {
        color: "65, 217, 207",
        top: 'auto',
        bottom: 0,
        height: "5%"
    },

}));

function Footer() {
    const classes = useStyles()
    return (
        <>
            <div>
                <AppBar position="fixed" color="primary" className={classes.appBar}>
                    <Toolbar>
                        <Grid container justify="center">
                            This website is still on development
                        </Grid>

                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}

export default Footer