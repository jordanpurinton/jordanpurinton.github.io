import React from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Button from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const fontStyle = {
    color: '#666',
    lineHeight: 1.8
};
const buttonStyles = {
    marginLeft: '7px',
    marginBottom: '18px'
};

class PortfolioCard extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <Card>
                    <CardMedia><img src={this.props.img} alt={this.props.img}/></CardMedia>
                    <CardTitle title={this.props.title} subtitle={this.props.sub} style={fontStyle}/>
                    <CardText style={fontStyle}>{this.props.text}</CardText>
                    <CardActions>
                        {this.props.link ?
                            <Button style={buttonStyles} label={this.props.buttonText} primary={true} href={this.props.link} target="_blank"/>
                            : null}
                        {this.props.link2 ?
                            <Button style={buttonStyles} label={this.props.buttonText2} secondary={true} href={this.props.link2} target="_blank"/>
                            : null}
                    </CardActions>
                </Card>
            </MuiThemeProvider>
        )
    }
}
export default PortfolioCard;