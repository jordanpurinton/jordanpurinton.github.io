import styled from 'styled-components';

export class Reusable {

    static BlackContainer = styled.div`
    background-color: black;
    color: #1EC503;
    padding: 16px;
    height: inherit;
    text-align: left;`;

    static GrayContainer = styled.div`
    background-color: #212121;
    color: #1EC503;
    padding: 16px;
    height: inherit;
    text-align: left;`;

    static SectionHeader = styled.h2`
    font-weight: bold;
    margin-bottom: 16px;
    color: #1EC503;`;

    static ExternalLink = styled.a`
    color: white;
    text-decoration: underline;
    font-weight: bold;
    text-align: center;`;

    static ListItem = styled.h4`
    font-weight: bold;
    margin: 16px 0 16px 0;
    color: white;`;

    static ItemText = styled.p`
    line-height: 1.8;
    margin-bottom: 16px;
    color: white;`;

    static ButtonWrapper = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0 16px 0 0;
    &:focus {
    outline:0;
    };
    &:hover {
    background-color: #212121;
    cursor: pointer;
    }`;

    static IconStyles = {
        fontSize: 20,
        color: 'white',
        padding: 0,
    };
}

export default Reusable;
