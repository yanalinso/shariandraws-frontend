import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        paddingTop: "4%",
    },
    media: {
        height: 400,
    },
});


function Body() {
    const classes = useStyles()
    return (
        <>
            <Container maxWidth={false}>
                <Grid container justify='center' className={classes.root}>
                    <Typography variant="h2">
                        Inktober
                    </Typography>
                </Grid>
                <Grid container justify="center" spacing={4}>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={`${process.env.PUBLIC_URL}/images/a.jpg`}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Day 1
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {/*Description*/}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <p color="primary">
                                    Artist
                                </p>
                                <Button size="small" color="primary">
                                    @Me
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={`${process.env.PUBLIC_URL}/images/b.jpg`}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Day 2
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {/*Description*/}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <p color="primary">
                                    Artist
                                </p>
                                <Button size="small" color="primary">
                                    @Me
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={`${process.env.PUBLIC_URL}/images/c.jpg`}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Day 3
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {/*Description*/}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <p color="primary">
                                    Artist
                                </p>
                                <Button size="small" color="primary">
                                    @Me
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={`${process.env.PUBLIC_URL}/images/d.jpg`}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Day 1
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {/*Description*/}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <p color="primary">
                                    Artist
                                </p>
                                <Button size="small" color="primary">
                                    @Me
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={`${process.env.PUBLIC_URL}/images/e.jpg`}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Day 2
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {/*Description*/}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <p color="primary">
                                    Artist
                                </p>
                                <Button size="small" color="primary">
                                    @Me
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={`${process.env.PUBLIC_URL}/images/f.jpg`}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Day 3
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {/*Description*/}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <p color="primary">
                                    Artist
                                </p>
                                <Button size="small" color="primary">
                                    @Me
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={`${process.env.PUBLIC_URL}/images/g.jpg`}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Day 3
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {/*Description*/}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <p color="primary">
                                    Artist
                                </p>
                                <Button size="small" color="primary">
                                    @Me
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={`${process.env.PUBLIC_URL}/images/h.jpg`}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Day 3
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {/*Description*/}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <p color="primary">
                                    Artist
                                </p>
                                <Button size="small" color="primary">
                                    @Me
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={`${process.env.PUBLIC_URL}/images/i.jpg`}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Day 3
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {/*Description*/}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <p color="primary">
                                    Artist
                                </p>
                                <Button size="small" color="primary">
                                    @Me
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}


export default Body