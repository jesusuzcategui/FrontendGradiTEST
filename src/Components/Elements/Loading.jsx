import styled, { keyframes } from "styled-components";

const animationRotateInfinite = keyframes`
    0% {transform: rotate(0deg); border-color: #e42020;}
    25% {border-color: #8f1212;}
    50% {border-color: #f7b060;}
    100% {transform: rotate(360deg); border-color: #000;}
`;

const Loading = styled.div`
    width: 100px;
    height: 100px;
    background: transparent;
    border-width: 5px;
    border-color: #000;
    border-style: solid;
    animation-name: ${animationRotateInfinite};
    animation-duration: 8s;
    animation-iteration-count: infinite;
    border-radius: 50%;
`;

export default Loading;