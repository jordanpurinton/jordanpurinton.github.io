import styled from 'styled-components';

export class Reusable {

    public static BlackContainer = styled.div`
    background-color: black;
    color: #1EC503;
    padding: 20px;
    height: inherit;
    text-align: left;`;

    public static GrayContainer = styled.div`
    background-color: #212121;
    color: #1EC503;
    padding: 20px;
    height: inherit;
    text-align: left;`;

    public static SectionHeader = styled.h2`
    font-weight: bold;
    color: #1EC503;`;

    public static ListItem = styled.h4`
    padding-top: 10px;
    font-weight: bold;
    color: white;`;

    public static ItemText = styled.p`
    line-height: 1.8;
    color: white;`;

    public static ButtonWrapper = styled.button`
    background-color: transparent;
    border: none;
    padding: 0 16px 0 0;
    &:focus {
    outline:0;
    };
    &:hover {
    background-color: #212121;
    cursor: pointer;
    }`;

    public static IconStyles = {
        fontSize: 20,
        color: 'white',
        padding: 0,
    };
}

export default Reusable;
