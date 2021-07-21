import React from 'react';
import { Card } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      flexGrow: 1,
    },
    media: {
      height: 300,
    },
  }));
  
function ShopCard({info}){
    const classes = useStyles();
    
    
    return (
        <Card className = {classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image = {info.image}
                title={info.title}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {info.title}
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p">
                    {info.description}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Typography size="body2" color="primary" component="h5">
                    ${info.price}
                </Typography>
            </CardActions>
        </Card>
    )
}

export default ShopCard;