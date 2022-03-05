import styled from 'styled-components';

const Button = styled.button`
    background-color: ${(props) => props.primary ? '#cdcdcd' : '#000'};
    color: ${(props) => props.primary ? '#000' : '#fff'};
    padding: 15px 30px;
    font-weight: 600;
    border: none;
    cursor: pointer;
`;

export default Button;