import styled from 'styled-components';

export class Reusable {

    static WhiteContainer = styled.div`
    background-color: white;
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

    static ListItem = styled.h4`
    font-weight: bold;
    margin: 16px 0 16px 0;
    color: rgba(0, 0, 0, 0.87);`;

    static ItemText = styled.p`
    line-height: 1.8;
    margin-bottom: 16px;
    color: rgba(0, 0, 0, 0.87);`;

    static ButtonWrapper = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0 16px 0 16px;
    &:focus {
    outline:0;
    };
    &:hover {
    background-color: darkgray;
    cursor: pointer;
    }`;

    static ButtonWrapperBottom = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0 32px 0 0;
    &:focus {
    outline:0;
    };
    &:hover {
    background-color: darkgray;
    cursor: pointer;
    }`;

    static IconStyles = {
        fontSize: 24,
        padding: 0,
    };

    static EmailIcon = {
        color: 'red'
    }
    static LinkedinIcon = {
        color: 'blue'
    }
    static GhIcon = {
        color: 'black'
    }
}

export default Reusable;
