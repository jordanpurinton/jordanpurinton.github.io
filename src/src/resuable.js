import styled from 'styled-components';

export class Reusable {

    static BlackContainer = styled.div`
    background-color: #012456;
    color: white;
    padding: 0 32px 32px 32px;
    height: inherit;
    text-align: left;`;

    static ContainerDivider = styled.hr`
    margin: 0 0 32px 0;
    border-top: solid 1px rgba(255,255,255,.25)`;

    static SectionHeader = styled.h2`
    font-weight: bold;
    margin-bottom: 32px;
    color: white;`;

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
        color: 'white',
        padding: 0,
    };
}

export default Reusable;
