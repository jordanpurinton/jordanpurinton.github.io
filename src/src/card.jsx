import React from 'react';
import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core';
import Fade from 'react-reveal/Fade';

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
        const { props } = this;
        const { org, orgLink, appType, title, text, subhead, nonPublicIndicator, buttonText, link, buttonText2, link2 } = props.data;
        return (
            <Fade>
                <Card style={styles.card}>

                    {/* header */}
                    <CardHeader title={orgLink ? <a href={orgLink} target="_blank" rel="noopener noreferrer">{org}</a> : org} subheader={appType} avatar={<Avatar src={props.avatarImg} />}></CardHeader>

                    {/* img */}
                    <CardMedia style={styles.media} image={props.img} />

                    {/* body */}
                    <CardContent>
                        <Typography gutterBottom variant="headline"><b>{title}</b></Typography>
                        <Typography style={styles.text}>{text}</Typography>
                        <Typography style={styles.subhead}>{subhead}</Typography>
                        {nonPublicIndicator ? <Typography style={styles.nonpublic}>* Not a public facing app</Typography> : null}
                    </CardContent>

                    {/* buttons/links */}
                    {buttonText ? <Button href={link} target="_blank" rel="noopener noreferrer"><span style={styles.button}>{buttonText}</span></Button> : null}

                    {/* buttons/links */}
                    {buttonText2 ? <Button href={link2} target="_blank" rel="noopener noreferrer"><span style={styles.button}>{buttonText2}</span></Button> : null}
                </Card>
            </Fade>
        );
    }
}

export default PortfolioCard;
