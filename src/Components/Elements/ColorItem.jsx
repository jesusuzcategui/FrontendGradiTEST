import styled from "styled-components";

const ColorItem = styled.button`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
    position: relative;
    background-color: ${ (props) => props.color.toLowerCase() };
    cursor: pointer;

    &:not(:last-child){
        margin-right: 1rem;
    }

    &:before {
        content: "";
        width: 25px;
        height: 25px;
        position: absolute;
        top: -7px;
        left: -6.4px;
        background: transparent;
        border: solid 4px #000;
        border-radius: 50%;
        opacity: 0;
        transition: all ease .5s;
        z-index: 1;
    }

    &:hover:before {
        opacity: 1;
    }

    &.selected:before {
        opacity: 1;
    }
`;

export default ColorItem;