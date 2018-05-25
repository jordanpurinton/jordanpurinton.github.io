import React from 'react';
import {Avatar, Button, Card, CardContent, CardHeader, CardMedia, Typography} from '@material-ui/core';
import Fade from 'react-reveal/Fade';
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
        padding: '37px 0 0 4px'
    },
    button: {
        margin: '13px',
        color: '#007bff',
        fontSize: '15px'
    },
    card: {
        maxWidth: '100%',
    },
    media: {
        height: 327,
    }
};

class PortfolioCard extends React.Component {
    render() {
        return (
            <Fade>
                <Card style={styles.card}>
                    <CardHeader title={this.props.data.org} subheader={this.props.data.appType}
                                avatar={<Avatar src={this.props.avatarImg}/>}>
                    </CardHeader>
                    <CardMedia style={styles.media} image={this.props.img}/>
                    <CardContent>
                        <Typography gutterBottom variant="headline"><b>{this.props.data.title}</b></Typography>
                        <Typography style={styles.text}>{this.props.data.text}</Typography>
                        <Typography style={styles.subhead}><Tag/> {this.props.data.subhead}</Typography>
                        {this.props.data.nonPublicIndicator ?
                            <Typography style={styles.nonpublic}>* Not a public facing app</Typography> : null}
                    </CardContent>
                    {this.props.data.buttonText ?
                        <Button href={this.props.data.link} target="_blank">
                            <span style={styles.button}>{this.props.data.buttonText}</span>
                        </Button>
                        : null}
                    {this.props.data.buttonText2 ?
                        <Button href={this.props.data.link2} target="_blank">
                            <span style={styles.button}>{this.props.data.buttonText2}</span>
                        </Button>
                        : null}
                </Card>
            </Fade>
        );
    }
}

export default PortfolioCard;
