import styled from "styled-components";

const SizeItem = styled.button`
    width: 40px;
    height: 40px;
    border: solid 1px #ccc;
    text-align:center;
    display: block;
    cursor: pointer;
    border: solid 1px #ccc;
    background: transparent;
    color: #ccc;
    transition: all ease .5s;
    font-family: 'Raleway', sans-serif;

    &.selected {
        color: #000;
        border-color: #000;
    }

    &:hover {
        color: #000;
        border-color: #000;
    }

    &:not(:last-child) {
        margin-right: .5rem;
    }
`;

export default SizeItem;