import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardActions, CardContent, CardMedia, CardHeader } from 'material-ui/Card';
import Fade from 'react-reveal/Fade';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Tag from 'react-icons/lib/fa/tag';

const styles = {
    text: {
        lineHeight: 1.8,
        color: 'rgba(0, 0, 0, 0.87)'
    },
    subhead: {
        marginTop: '8px',
        lineHeight: 1.8,
        color: 'rgba(0, 0, 0, 0.54)'
    },
    nonpublic: {
        paddingTop: '24px',
        color: 'rgba(0, 0, 0, 0.54)'
    },
    button: {
        marginLeft: '15px',
        marginRight: '16px',
        marginBottom: '16px'
    },
    card: {
        maxWidth: '100%',
    },
    media: {
        height: 327,
    }
};

class PortfolioCard extends React.Component {
    render(props) {
        return (
            <Fade>
                <Card style={styles.card}>
                    <CardHeader title={this.props.data.org} subheader={this.props.data.appType} avatar={<Avatar src={this.props.avatarImg}></Avatar>}>
                    </CardHeader> 
                    <CardMedia style={styles.media} image={this.props.img} />
                    <CardContent>
                        <Typography gutterBottom variant="headline"><b>{this.props.data.title}</b></Typography>
                        <Typography style={styles.text}>{this.props.data.text}</Typography>
                        <Typography style={styles.subhead}><Tag />    {this.props.data.subhead}</Typography>
                        {this.props.data.nonPublicIndicator ? <Typography style={styles.nonpublic}>* Not a public facing app</Typography> : null}
                    </CardContent>
                    <CardActions>
                        {this.props.data.buttonText ? <a href={this.props.data.link} target="_blank" style={styles.button}>{this.props.data.buttonText}</a> : null}
                        {this.props.data.buttonText2 ? <a href={this.props.data.link2} target="_blank" style={styles.button}>{this.props.data.buttonText2}</a> : null}
                    </CardActions>
                </Card>
            </Fade>
        );
    }
}

PortfolioCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default PortfolioCard;
