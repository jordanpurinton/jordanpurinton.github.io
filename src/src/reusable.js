import styled from 'styled-components';

export class Reusable {

    static WhiteContainer = styled.div`
    background-color: ##fdfdfd;
    color: rgba(0, 0, 0, 0.87);
    padding: 0 32px 32px 32px;
    height: inherit;
    text-align: left;`;

    static ContainerDivider = styled.hr`
    margin: 0 0 32px 0;
    border-top: solid 1px rgba(0,0,0,.1)`;

    static SectionHeader = styled.h2`
    font-weight: bold;
    margin-bottom: 32px;
    color: rgba(0, 0, 0, 0.87);`;

    static ExternalLink = styled.a`
    color: rgba(0, 0, 0, 0.87);
    text-decoration: underline;
    font-weight: bold;
    text-align: center;`;

    static ListItem = styled.h5`
    font-weight: bold;
    margin: 16px 0 4px 0;
    color: rgba(0, 0, 0, 0.87);`;

    static ItemText = styled.p`
    line-height: 1.8;
    margin-bottom: 16px;
    margin-left: 2px;
    color: rgba(0, 0, 0, 0.87);`;

    static ButtonStyles = {
        email: {
            backgroundColor: '#ff4343',
            color: 'white',
            margin: '0 12px 0 0',
            outline: 'none'
        },
        linkedin: {
            backgroundColor: '#0077B5',
            color: 'white',
            margin: '0 12px 0 12px',
            outline: 'none'
        },
        github: {
            backgroundColor: 'whitesmoke',
            color: 'black',
            margin: '0 12px 0 12px',
            outline: 'none'
        }
    }
}

export default Reusable;
