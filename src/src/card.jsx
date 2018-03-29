import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia, CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Tag from 'react-icons/lib/fa/tag';

const styles = {
    text: {
        lineHeight: 1.8,
        color: '#666'
    },
    subhead: {
        marginTop: '6px',
        lineHeight: 1.8,
        color: 'darkgray'
    },
    button: {
        marginLeft: '10px',
        marginBottom: '17px',
        '&:hover': {
            color: 'lightgray',
        },
    },
    card: {
        maxWidth: '100%',
    },
    media: {
        height: 327,
    }
};

function PortfolioCard(props) {
    const { classes } = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardHeader title={props.org} subheader={props.appType} avatar={<Avatar src={props.avatarImg}></Avatar>}>
                </CardHeader>
                <CardMedia className={classes.media} image={props.img} />
                <CardContent>
                    <Typography gutterBottom variant="headline">{props.title}</Typography>
                    <Typography className={classes.text}>{props.text}</Typography>
                    <Typography className={classes.subhead}><Tag/>    {props.subhead}</Typography>
                </CardContent>
                <CardActions>
                    {props.buttonText ? <Button href={props.link} target="_blank" variant="raised" color="primary" className={classes.button}>{props.buttonText}</Button> : null}
                    {props.buttonText2 ? <Button href={props.link2} target="_blank" variant="raised" color="secondary" className={classes.button}>{props.buttonText2}</Button> : null}
                </CardActions>
            </Card>
        </div>
    );
}

PortfolioCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PortfolioCard);
